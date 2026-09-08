export function FrameworkVisual({ slug }: { slug: string }) {
  let title = "",
    parts: string[][] = [];
  if (slug === "geoffrey-moores-positioning-statement-framework") {
    title = "Six decisions. One clear position.";
    parts = [
      ["For", "a specific target customer"],
      ["Who", "has this need or opportunity"],
      ["Our product is", "a recognisable product category"],
      ["That", "delivers this primary benefit"],
      ["Unlike", "the main competitive alternative"],
      ["We", "offer this meaningful difference"],
    ];
  } else if (slug === "segmentationtargetingpositioning-stp-framework") {
    title = "Choose the audience before the message.";
    parts = [
      ["Segment", "Group customers by meaningful differences."],
      ["Target", "Choose the segment you can serve well."],
      ["Position", "Define the value you want that audience to recognise."],
    ];
  } else if (slug === "message-architecture-messaging-house") {
    title = "A message the whole team can build on.";
    parts = [
      ["Core message", "The central promise grounded in positioning."],
      ["Supporting pillars", "The main reasons to believe the promise."],
      ["Proof points", "The evidence behind each pillar."],
    ];
  } else if (slug === "features-advantages-benefits-fab-ladder") {
    title = "Translate what it does into why it matters.";
    parts = [
      ["Feature", "What the product has or does."],
      ["Advantage", "What that capability makes possible."],
      ["Benefit", "The outcome the buyer cares about."],
    ];
  }
  if (!parts.length) return null;
  return (
    <figure className="framework-visual">
      <figcaption>{title}</figcaption>
      <ol>
        {parts.map(([label, description]) => (
          <li key={label}>
            <strong>{label}</strong>
            <span>{description}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
