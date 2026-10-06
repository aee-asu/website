import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Kept for existing callers; reading content no longer waits for motion. */
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Set when the element is a link target, e.g. /research#aee. */
  id?: string;
};

/** Server-rendered layout wrapper; content stays readable if hydration fails. */
export function Reveal({ children, as, className = "", id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
}
