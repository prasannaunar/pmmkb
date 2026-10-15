/** Renders schema.org structured data. `<` is escaped so text taken from
 * entries can never close the script tag (see Next's JSON-LD guide). */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
