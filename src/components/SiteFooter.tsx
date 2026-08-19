import Image from "next/image";
import Link from "next/link";

import { links, nav, site } from "@/data/site";

const connect = [
  { href: links.join, label: "Sun Devil Central" },
  { href: links.instagram, label: "Instagram" },
  { href: links.discord, label: "Discord" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: `mailto:${links.email}`, label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            {/* The mark sits on its own light plate — the artwork is never recoloured. */}
            <div className="inline-flex bg-paper px-6 py-5">
              <Image
                src="/images/brand/aee-asu-lockup.png"
                alt=""
                width={1200}
                height={509}
                sizes="170px"
                className="h-14 w-auto"
              />
            </div>
            <p className="measure-tight mt-8 text-[1.0625rem] leading-relaxed text-mist">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h2 className="label text-ash">Site</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mist transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/join" className="text-mist transition-colors hover:text-gold">
                  Join
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label text-ash">Connect</h2>
            <ul className="mt-5 space-y-3">
              {connect.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-mist transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-t mt-16 pt-8">
          <p className="measure text-sm leading-relaxed text-ash">
            {site.legalName}. A registered student organization at Arizona State University.
            This website is operated by the student chapter and is not an official
            Arizona State University publication. AEE and the AEE logo are marks of the
            Association of Energy Engineers.
          </p>
          <p className="label mt-6 text-ash">
            © {new Date().getFullYear()} {site.shortName} · {site.campus}
          </p>
        </div>
      </div>
    </footer>
  );
}
