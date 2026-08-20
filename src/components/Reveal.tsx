"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Set when the element is a link target, e.g. /research#aee. */
  id?: string;
};

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * The shown state is written straight to the DOM rather than held in React
 * state — nothing else depends on it, so there is no reason to re-render. The
 * hidden starting state is applied by CSS only when `.js` is on <html>, so the
 * content is always visible without JavaScript, and `prefers-reduced-motion`
 * removes the movement entirely.
 */
export function Reveal({ children, delay = 0, as, className = "", id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.dataset.shown = "true";
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      data-shown="false"
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
