import { markdownToInlineHtml } from "@/lib/content";

interface EntrySourcesProps {
  markdown: string;
}

export async function EntrySources({ markdown }: EntrySourcesProps) {
  const rawHtml = await markdownToInlineHtml(markdown);
  const html = rawHtml.replace(/<a href="/g, '<a target="_blank" rel="noopener noreferrer" href="');

  return (
    <section id="sources" aria-label="Sources" className="sources mb-10">
      <h2
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ fontFamily: "var(--font-sans)", color: "var(--text-tertiary)" }}
      >
        Sources
      </h2>
      <div className="sources-list" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
