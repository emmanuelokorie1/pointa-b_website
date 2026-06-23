import api from '@/lib/axios';
import type { OrderTrackingData, Product, MapPoint, TimelineEvent, StatusDetails } from './types';

export const mapApiResponse = (data: any, trackingCode: string, progressInfo?: any): OrderTrackingData => {
    // Backend API wraps details inside a "data" object; check for it, or use fallback flat data.
    const raw = data.data ? data.data : data;
    const rawProgress = progressInfo?.data ? progressInfo.data : progressInfo;

    let progress = 2; // Default to In Transit (stage 2)
    const statusStr = String(
        (rawProgress && (rawProgress.current_status || rawProgress.order_status)) ||
        raw.current_status || 
        (raw.order && raw.order.status) || 
        raw.status || 
        ""
    ).toLowerCase();
    
    if (statusStr.includes('confirm') || statusStr.includes('received') || statusStr.includes('pending') || statusStr.includes('paid')) {
        progress = 0;
    } else if (statusStr.includes('picked') || statusStr.includes('route')) {
        progress = 1;
    } else if (statusStr.includes('transit')) {
        progress = 2;
    } else if (statusStr.includes('near') || statusStr.includes('approach')) {
        progress = 3;
    } else if (statusStr.includes('arrive') || statusStr.includes('delivered') || statusStr.includes('success')) {
        progress = 4;
    } else if (typeof raw.progress === 'number') {
        progress = raw.progress;
    }

    const rawProducts = raw.products || (raw.order && raw.order.order_items) || [];
    const products: Product[] = rawProducts.map((p: any) => ({
        name: p.name || p.title || p.product_name || "Package Item",
        size: p.size || p.item_size || "Medium",
        weight: p.weight || p.item_weight || "N/A",
        category: p.category || p.item_category || "General",
        dimension: p.dimension || p.dimensions || p.item_dimension || "N/A",
    }));

    const finalProducts = products.length > 0 ? products : [
        { 
            name: raw.contents || "Package Shipment", 
            size: "Standard", 
            weight: raw.weight || "1.85 kg", 
            category: "General Delivery", 
            dimension: raw.dimensions || "30 x 20 x 10 cm" 
        }
    ];

    const finalMapPoints: MapPoint[] = [];

    // Add pickup point from order address if present
    if (raw.order && raw.order.pickup_latitude && raw.order.pickup_longitude) {
        finalMapPoints.push({
            lng: Number(raw.order.pickup_longitude),
            lat: Number(raw.order.pickup_latitude),
            label: "Pickup: " + (raw.order.pickup_address ? raw.order.pickup_address.split(',')[0] : "Ikeja Hub")
        });
    }

    // Add tracking history positions
    if (Array.isArray(raw.tracking_history)) {
        const sortedHistory = [...raw.tracking_history].sort(
            (a, b) => new Date(a.location?.timestamp || 0).getTime() - new Date(b.location?.timestamp || 0).getTime()
        );
        sortedHistory.forEach((hist: any, index: number) => {
            if (hist.location?.lng && hist.location?.lat) {
                finalMapPoints.push({
                    lng: Number(hist.location.lng),
                    lat: Number(hist.location.lat),
                    label: hist.message || `Location Update ${index + 1}`
                });
            }
        });
    }

    // Add current location of the rider
    if (raw.current_location?.lng && raw.current_location?.lat) {
        const hasCurrent = finalMapPoints.some(
            p => Math.abs(p.lng - Number(raw.current_location.lng)) < 0.0001 && Math.abs(p.lat - Number(raw.current_location.lat)) < 0.0001
        );
        if (!hasCurrent) {
            finalMapPoints.push({
                lng: Number(raw.current_location.lng),
                lat: Number(raw.current_location.lat),
                label: "Rider Current Location"
            });
        }
    }

    // Add delivery destination point from order address if present
    if (raw.order && raw.order.delivery_latitude && raw.order.delivery_longitude) {
        finalMapPoints.push({
            lng: Number(raw.order.delivery_longitude),
            lat: Number(raw.order.delivery_latitude),
            label: "Delivery: " + (raw.order.delivery_address ? raw.order.delivery_address.split(',')[0] : "Destination")
        });
    }

    // fallback mapping points if route coordinates aren't defined
    const finalCoords = finalMapPoints.length >= 2 ? finalMapPoints : [
        { lng: 3.3524, lat: 6.6018, label: raw.sender_address || "Ikeja Hub" },
        { lng: 3.3762, lat: 6.5540, label: "Toll Gate" },
        { lng: 3.3995, lat: 6.5020, label: "Third Mainland Bridge" },
        { lng: 3.4402, lat: 6.4426, label: "Lekki Exp" },
        { lng: 3.4246, lat: 6.4281, label: raw.recipient_address || "Victoria Island" }
    ];

    const formatTime = (dateStr?: string) => {
        if (!dateStr) return "";
        try {
            const dateObj = new Date(dateStr);
            if (isNaN(dateObj.getTime())) return "";
            return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch (e) {
            return "";
        }
    };

    const history = Array.isArray(raw.tracking_history) ? raw.tracking_history : [];

    const findStatusTime = (keywords: string[]) => {
        const match = history.find((h: any) => {
            const s = String(h.status || "").toLowerCase();
            const m = String(h.message || "").toLowerCase();
            return keywords.some(kw => s.includes(kw) || m.includes(kw));
        });
        return match ? formatTime(match.location?.timestamp || match.last_updated) : "";
    };

    const findStatusDesc = (keywords: string[], defaultDesc: string) => {
        const match = history.find((h: any) => {
            const s = String(h.status || "").toLowerCase();
            const m = String(h.message || "").toLowerCase();
            return keywords.some(kw => s.includes(kw) || m.includes(kw));
        });
        return match?.message || defaultDesc;
    };

    const isNear = progress === 3;
    const isTransitOrNear = progress === 2 || progress === 3;

    const confirmTime = formatTime(raw.order?.date_created || raw.date_created) || raw.confirm_time || "12:48 PM";
    const pickupTime = findStatusTime(['pick', 'depart']) || raw.pickup_time || "12:54 PM";
    const transitTime = findStatusTime(['transit', 'route', 'corridor']) || raw.transit_time || "1:00 PM";
    const nearTime = findStatusTime(['near', 'approach', 'expressway']) || (raw.transit_time ? formatTime(new Date(new Date(raw.transit_time).getTime() + 6 * 60000).toISOString()) : "1:06 PM");
    const arrivedTime = findStatusTime(['arrive', 'deliver', 'success']) || raw.arrived_time || "1:12 PM";

    const confirmDesc = findStatusDesc(['confirm', 'receive', 'pending', 'paid'], "Package registered successfully.");
    const pickupDesc = findStatusDesc(['pick', 'depart'], "Courier departed from Hub.");
    const transitDesc = findStatusDesc(['transit'], "Courier is in transit corridor.");
    const nearDesc = findStatusDesc(['near', 'approach'], "Courier is approaching drop-off.");
    const arrivedDesc = findStatusDesc(['arrive', 'deliver', 'success'], "Courier reached destination.");

    const timelineEvents: TimelineEvent[] = [
        { 
            id: 4, 
            time: arrivedTime, 
            title: statusStr.includes('deliver') ? "Delivered" : "Arrived", 
            desc: arrivedDesc, 
            status: progress === 4 ? "active" as const : (progress > 4 ? "completed" as const : "pending" as const) 
        },
        { 
            id: 3, 
            time: isNear ? nearTime : transitTime, 
            title: isNear ? "Near Destination" : "In Transit", 
            desc: isNear ? nearDesc : transitDesc, 
            status: isTransitOrNear ? "active" as const : (progress > 3 ? "completed" as const : "pending" as const) 
        },
        { 
            id: 2, 
            time: pickupTime, 
            title: "Picked Up", 
            desc: pickupDesc, 
            status: progress === 1 ? "active" as const : (progress > 1 ? "completed" as const : "pending" as const) 
        },
        { 
            id: 1, 
            time: confirmTime, 
            title: "Order Confirmed", 
            desc: confirmDesc, 
            status: progress === 0 ? "active" as const : (progress > 0 ? "completed" as const : "pending" as const) 
        }
    ];

    // Format ETA ISO strings into clean 12-hour AM/PM formats
    let etaRaw = (rawProgress && rawProgress.eta) || raw.eta || "N/A";
    let formattedEta = etaRaw;
    if (formattedEta.includes('T') || formattedEta.includes('-')) {
        try {
            const dateObj = new Date(formattedEta);
            formattedEta = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch (e) {
            formattedEta = etaRaw;
        }
    }

    const progressPercentage = progress === 4 
        ? 100 
        : (typeof (rawProgress && rawProgress.progress_percentage) === 'number'
            ? rawProgress.progress_percentage
            : (typeof raw.progress_percentage === 'number' ? raw.progress_percentage : undefined));

    const distanceRemaining = progress === 4
        ? 0
        : (typeof (rawProgress && rawProgress.distance_remaining) === 'number'
            ? rawProgress.distance_remaining
            : (typeof raw.distance_remaining === 'number' ? raw.distance_remaining : undefined));

    return {
        trackingCode: raw.tracking_code || trackingCode,
        contents: raw.contents || (raw.order && raw.order.order_number) || "Package Shipment",
        weight: raw.weight || "N/A",
        dimensions: raw.dimensions || "N/A",
        securityPin: (raw.order && raw.order.delivery_code) || raw.security_pin || "N/A",
        sealStatus: raw.seal_status || "N/A",
        sender: (raw.order && raw.order.pickup_address) || raw.sender_address || "N/A",
        recipient: (raw.order && raw.order.delivery_address) || raw.recipient_address || "N/A",
        recipientName: raw.recipient_name || (raw.order && raw.order.recipient_name) || "Recipient",
        recipientPhone: raw.recipient_phone || (raw.order && raw.order.recipient_phone) || "N/A",
        riderName: (raw.order && raw.order.rider && raw.order.rider.name) || raw.rider_name || "Unassigned",
        riderRating: (raw.order && raw.order.rider && raw.order.rider.rating) ? String(raw.order.rider.rating) : "N/A",
        riderVehicle: (raw.order && raw.order.rider && raw.order.rider.vehicle) || raw.rider_vehicle || "N/A",
        riderPhone: (raw.order && raw.order.rider && raw.order.rider.phone_number) || raw.rider_phone || "N/A",
        riderPhoto: (raw.order && raw.order.rider && raw.order.rider.profile_picture) || raw.rider_photo || "",
        eta: formattedEta,
        progress,
        deliveryInstructions: raw.delivery_instructions || raw.message || "No special instructions.",
        products: finalProducts,
        timelineEvents,
        mapPathPoints: finalCoords,
        distanceRemaining,
        progressPercentage
    };
};

export const fetchTrackingData = async (trackingCode: string) => {
    const response = await api.get(`/orders/tracking/${trackingCode}/`);
    return response.data;
};

export const fetchProgressData = async (orderId: string) => {
    const response = await api.get(`/orders/tracking/${orderId}/progress/`);
    return response.data;
};

export const getStatusDetails = (stage: number, riderName: string = "Rider"): StatusDetails => {
    switch (stage) {
        case 0:
            return {
                statusText: "Order Confirmed",
                subtext: "Your package has been registered and is ready for pickup.",
                badgeColor: "bg-[#3B007A]/10 text-[#3B007A]",
            };
        case 1:
            return {
                statusText: "Picked Up & En Route",
                subtext: `${riderName} has picked up your package and is departing the hub.`,
                badgeColor: "bg-blue-100 text-blue-700",
            };
        case 2:
            return {
                statusText: "In Transit",
                subtext: `${riderName} is crossing the Third Mainland Bridge corridor.`,
                badgeColor: "bg-[#8E24FF]/10 text-[#8E24FF]",
            };
        case 3:
            return {
                statusText: "Near Destination",
                subtext: `${riderName} is passing Lekki Expressway and approaching drop-off.`,
                badgeColor: "bg-amber-100 text-amber-700",
            };
        case 4:
            return {
                statusText: "Arrived",
                subtext: "Courier has arrived. Please verify your package and share the PIN.",
                badgeColor: "bg-emerald-100 text-emerald-700",
            };
        default:
            return {
                statusText: "In Transit",
                subtext: `${riderName} is heading to your drop-off.`,
                badgeColor: "bg-[#3B007A]/10 text-[#3B007A]",
            };
    }
};
