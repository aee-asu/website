"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { links, nav, site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // The panel is remembered against the route it was opened on, so any
  // navigation — including the browser back button — closes it during render
  // rather than in an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  // While the panel is open: lock scroll, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenedOn(null);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-sm rule-b">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${site.plainName} — home`}
        >
          <Image
            src="/images/brand/aee-asu-lockup.png"
            alt=""
            width={1200}
            height={509}
            loading="eager"
            fetchPriority="high"
            className="h-9 w-auto md:h-11"
          />
          <span className="sr-only">{site.legalName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.9375rem] transition-colors ${
                  active
                    ? "text-maroon"
                    : "text-ink-soft hover:text-maroon"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/join"
            className="inline-flex items-center bg-ink px-5 py-2.5 text-[0.9375rem] text-paper transition-colors hover:bg-maroon"
          >
            Join AEE
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex items-center gap-2.5 lg:hidden"
        >
          <span className="label text-ink-soft">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        /* Sized with dvh so the panel still fits when mobile browser chrome
           expands and contracts. */
        className="fixed left-0 right-0 top-[4.5rem] z-50 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label="Primary, mobile" className="shell flex flex-col pb-16 pt-2">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="display rule-b py-6 text-[2rem] text-ink transition-colors hover:text-maroon"
            >
              <span className="label mr-4 align-middle text-ash">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-8 inline-flex items-center justify-between bg-ink px-6 py-5 text-lg text-paper"
          >
            Join AEE
            <span aria-hidden>→</span>
          </Link>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <a href={links.instagram} className="label text-ash hover:text-maroon">
              Instagram
            </a>
            <a href={links.discord} className="label text-ash hover:text-maroon">
              Discord
            </a>
            <a href={links.linkedin} className="label text-ash hover:text-maroon">
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`} className="label text-ash hover:text-maroon">
              Email
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
