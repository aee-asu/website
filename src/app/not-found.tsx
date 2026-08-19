import Link from "next/link";

import { nav } from "@/data/site";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[62vh] flex-col justify-center py-24">
      <p className="label text-maroon">404</p>
      <h1 className="display mt-8 max-w-[16ch] text-[clamp(2.5rem,7vw,5rem)] text-ink">
        That page is not here.
      </h1>
      <p className="measure mt-8 text-lg leading-relaxed text-graphite">
        It may have been renamed, or the link may be old. These are all of them:
      </p>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <Link href="/" className="link-underline text-ink">
            Home
          </Link>
        </li>
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="link-underline text-ink">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/join" className="link-underline text-ink">
            Join
          </Link>
        </li>
      </ul>
    </section>
  );
}
