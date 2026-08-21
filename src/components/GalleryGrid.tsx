"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryImage } from "@/data/gallery";

/**
 * Irregular editorial grid with an optional lightbox. Wide images take two
 * columns on large screens; everything else follows its own aspect ratio, so
 * the grid stays uneven on purpose rather than being cropped into a mosaic.
 */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : images[openIndex];
  const isOpen = openIndex !== null;

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  /** The thumbnail that opened the lightbox, so focus can go back to it. */
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((index) =>
        index === null ? null : (index + delta + images.length) % images.length,
      ),
    [images.length],
  );

  /*
    Keyboard behaviour for the lightbox. Focus moves into the dialog on open,
    is kept inside it while Tabbing, and returns to the thumbnail on close —
    otherwise a keyboard user is left navigating the page behind the overlay.
    Keyed on `isOpen` rather than `openIndex` so stepping between images does
    not tear the whole thing down and rebuild it.
  */
  useEffect(() => {
    if (!isOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const opener = document.activeElement;
    openerRef.current = opener instanceof HTMLElement ? opener : null;
    closeRef.current?.focus();

    function trapTab(event: KeyboardEvent) {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("button"));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && dialog.contains(active);

      if (event.shiftKey && (!inside || active === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (!inside || active === last)) {
        event.preventDefault();
        first.focus();
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab") trapTab(event);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [isOpen, close, step]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <li
            key={image.src}
            className={image.span === "wide" ? "sm:col-span-2" : undefined}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full text-left"
            >
              <span className="sr-only">View larger: </span>
              <span className="block overflow-hidden bg-bone">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index < 2}
                  sizes={
                    image.span === "wide"
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="label text-ink-soft">{image.event}</span>
                <span className="label text-ash">{image.date}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="on-dark fixed inset-0 z-[60] flex flex-col bg-ink/97"
        >
          <div className="shell flex shrink-0 items-center justify-between py-5">
            <p className="label text-mist" aria-live="polite" aria-atomic="true">
              <span aria-hidden>
                {String((openIndex ?? 0) + 1).padStart(2, "0")}
                <span className="mx-2 text-ash">/</span>
                {String(images.length).padStart(2, "0")}
              </span>
              <span className="sr-only">
                Image {(openIndex ?? 0) + 1} of {images.length}. {current.alt}
              </span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="label text-mist hover:text-gold"
            >
              Close ✕
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            <Image
              src={current.src}
              /* Empty on purpose: the caption below is visible text and carries
                 the same description, so a non-empty alt would repeat it. */
              alt=""
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>

          <div className="shell flex shrink-0 items-center justify-between gap-6 py-5">
            <p className="measure text-sm text-mist">{current.alt}</p>
            <div className="flex shrink-0 gap-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="label text-mist hover:text-gold"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="label text-mist hover:text-gold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
