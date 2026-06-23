"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { routes } from '@/constants/route';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { mapApiResponse, fetchTrackingData, fetchProgressData, getStatusDetails } from './trackingApi';
import TrackSearchForm from './TrackSearchForm';
import TrackingSidebar from './TrackingSidebar';

const TrackMap = dynamic(() => import('@/components/maps/TrackMap'), { ssr: false });

const LoadingSpinner = ({ text = "Loading tracking details..." }: { text?: string }) => (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center font-mono">
        <div className="flex flex-col items-center gap-3">
            <svg className="animate-spin h-8 w-8 text-[#8E24FF]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="font-sans font-medium text-gray-500">{text}</span>
        </div>
    </div>
);

const TrackPageContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const trackingId = searchParams.get('id') || "PT-829-105";

    const [mounted, setMounted] = useState(false);
    const [shouldPoll, setShouldPoll] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { data: apiData, isLoading, error: apiError } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: () => fetchTrackingData(trackingId),
        enabled: mounted && !!trackingId,
        refetchInterval: shouldPoll ? 5000 : false,
        retry: false,
    });

    useEffect(() => {
        if (apiData) {
            const raw = apiData.data || apiData;
            const statusStr = String(
                raw.current_status || 
                raw.order?.status || 
                raw.status || 
                ""
            ).toLowerCase();
            const finished = statusStr.includes('deliver') || statusStr.includes('success') || statusStr.includes('cancel') || statusStr.includes('complete');
            if (finished) {
                setShouldPoll(false);
            } else {
                setShouldPoll(true);
            }
        }
    }, [apiData]);

    const orderId = apiData?.data?.order_id || apiData?.order_id;

    const { data: progressData } = useQuery({
        queryKey: ['progress', orderId],
        queryFn: () => fetchProgressData(orderId),
        enabled: mounted && !!orderId,
        refetchInterval: shouldPoll ? 5000 : false,
        retry: false,
    });

    const handleSearchSubmit = (trackingCode: string) => {
        router.push(`${routes.TRACK}?id=${encodeURIComponent(trackingCode)}`);
    };

    const queryId = searchParams.get('id');
    const hasError = !!apiError || (queryId && !apiData && !isLoading);

    if (!mounted) {
        return <LoadingSpinner />;
    }

    // If no tracking ID is provided in URL, show track search page
    if (!queryId) {
        return <TrackSearchForm onSubmit={handleSearchSubmit} />;
    }

    if (isLoading) {
        return <LoadingSpinner text="Retrieving tracking information..." />;
    }

    if (hasError) {
        return <TrackSearchForm onSubmit={handleSearchSubmit} errorTrackingId={trackingId} />;
    }

    const orderData = mapApiResponse(apiData, trackingId, progressData);
    const status = getStatusDetails(orderData.progress, orderData.riderName);

    return (
        <main className="relative h-screen w-screen bg-gray-50 text-[#3B007A] font-sans overflow-hidden">

            {/* FULL SCREEN MAP (Background layer) */}
            <div className="absolute inset-0 z-0">
                <TrackMap progress={orderData.progress} points={orderData.mapPathPoints} />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/30 to-transparent z-10 hidden md:block" />
            </div>

            {/* FLOATING SIDEBAR / BOTTOM SHEET (Foreground layer) */}
            <TrackingSidebar orderData={orderData} status={status} />
        </main>
    );
};

export default TrackPageContent;
