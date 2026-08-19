"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { GalleryImage } from "@/data/gallery";

/**
 * Irregular editorial grid with an optional lightbox. Wide images take two
 * columns on large screens; everything else follows its own aspect ratio, so
 * the grid stays uneven on purpose rather than being cropped into a mosaic.
 */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : images[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((index) =>
        index === null ? null : (index + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

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
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="on-dark fixed inset-0 z-[60] flex flex-col bg-ink/97"
        >
          <div className="shell flex shrink-0 items-center justify-between py-5">
            <p className="label text-mist">
              {String((openIndex ?? 0) + 1).padStart(2, "0")}
              <span className="mx-2 text-ash">/</span>
              {String(images.length).padStart(2, "0")}
            </p>
            <button type="button" onClick={close} className="label text-mist hover:text-gold">
              Close ✕
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            <Image
              src={current.src}
              alt={current.alt}
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
