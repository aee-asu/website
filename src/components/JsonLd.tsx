/**
 * Emits a JSON-LD block. Content is generated from the site's own typed data,
 * never from user input, so there is nothing to escape beyond the closing-tag
 * sequence that would end the script element early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
