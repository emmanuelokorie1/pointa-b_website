"use client";

import { useEffect, useState, type ComponentType } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  load: () => Promise<{ default: ComponentType }>;
  minHeight?: number;
  rootMargin?: string;
};

export default function DeferredSection({
  load,
  minHeight = 480,
  rootMargin = '400px',
}: Props) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ rootMargin, once: true });
  const [Section, setSection] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!visible || Section) return;
    let cancelled = false;
    load().then((mod) => {
      if (!cancelled) setSection(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [visible, Section, load]);

  return (
    <div
      ref={ref}
      className="section-deferred"
      style={{ minHeight: Section ? undefined : minHeight }}
    >
      {Section ? <Section /> : null}
    </div>
  );
}
