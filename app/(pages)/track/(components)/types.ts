export interface Product {
    name: string;
    size?: string;
    weight?: string;
    category?: string;
    dimension?: string;
}

export interface TimelineEvent {
    id: number;
    time: string;
    title: string;
    desc: string;
    status: 'active' | 'completed' | 'pending';
}

export interface MapPoint {
    lng: number;
    lat: number;
    label: string;
}

export interface OrderTrackingData {
    trackingCode: string;
    contents: string;
    weight: string;
    dimensions: string;
    securityPin: string;
    sealStatus: string;
    sender: string;
    recipient: string;
    recipientName: string;
    recipientPhone: string;
    riderName: string;
    riderRating: string;
    riderVehicle: string;
    riderPhone: string;
    riderPhoto: string;
    eta: string;
    progress: number;
    deliveryInstructions: string;
    products: Product[];
    timelineEvents: TimelineEvent[];
    mapPathPoints: MapPoint[];
    distanceRemaining?: number;
    progressPercentage?: number;
}

export interface StatusDetails {
    statusText: string;
    subtext: string;
    badgeColor: string;
}
