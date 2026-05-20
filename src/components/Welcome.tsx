import { useEffect, useRef, useState, type ReactNode } from "react";

export function Welcome({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Enso({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className}>
      <path
        d="M 100 25 a 75 75 0 1 1 -52 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        style={{ strokeDasharray: 500, strokeDashoffset: 0 }}
      />
    </svg>
  );
}

export function EnsoDraw({ size = 320 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size}>
      <path
        d="M 100 25 a 75 75 0 1 1 -52 22"
        fill="none"
        stroke="#BC002D"
        strokeWidth="12"
        strokeLinecap="round"
        style={{ strokeDasharray: 500, animation: "ensoDraw 1.6s cubic-bezier(0.77,0,0.18,1) forwards" }}
      />
    </svg>
  );
}