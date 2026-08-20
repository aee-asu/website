import type { ResourceGroup } from "@/data/resources";
import { Reveal } from "@/components/Reveal";

function ExternalArrow() {
  return (
    <span
      aria-hidden
      className="ml-3 inline-block translate-y-px text-ash transition-all duration-300 group-hover:translate-x-1 group-hover:text-maroon"
    >
      ↗
    </span>
  );
}

export function ResourceList({ group, index }: { group: ResourceGroup; index: number }) {
  return (
    <Reveal
      as="section"
      id={group.id}
      /* scroll-mt clears the sticky header when arriving from /research#aee. */
      className="rule-t grid gap-8 scroll-mt-28 py-10 md:grid-cols-12 md:py-14"
    >
      <div className="md:col-span-4">
        <p className="label text-maroon">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="display mt-4 text-[1.75rem] text-ink md:text-[2rem]">{group.title}</h3>
        {group.intro ? (
          <p className="measure-tight mt-4 leading-relaxed text-graphite">{group.intro}</p>
        ) : null}
      </div>

      <ul className="md:col-span-8">
        {group.links.map((link) => (
          <li key={link.href} className="rule-t first:border-t-0 md:first:border-t">
            <a
              href={link.href}
              className="group flex flex-col py-5 transition-colors md:flex-row md:items-baseline md:gap-8"
            >
              <span className="text-[1.0625rem] text-ink group-hover:text-maroon md:w-1/2 md:shrink-0">
                {link.title}
                <ExternalArrow />
              </span>
              {link.note ? (
                <span className="mt-1.5 text-sm leading-relaxed text-graphite md:mt-0">
                  {link.note}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
