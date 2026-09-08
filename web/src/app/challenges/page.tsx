import Link from "next/link";
import { challenges } from "@/lib/guides";
export const metadata = {
  title: "Solve a challenge",
  description:
    "Find product marketing methods for the situation in front of you.",
};
export default function ChallengesPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Find a useful starting point</p>
        <h1>Solve a challenge</h1>
        <p className="lede">
          Start with what is happening in your work. Each guide connects the
          decisions to make with the methods that can help.
        </p>
      </header>
      <div className="challenge-grid">
        {challenges.map((g) => (
          <Link
            className="challenge-link"
            href={`/challenges/${g.slug}`}
            key={g.slug}
          >
            <h2>
              {g.title}
              <span aria-hidden="true"> ↗</span>
            </h2>
            <p>{g.description}</p>
            <p className="metadata">{g.steps.length} suggested methods</p>
          </Link>
        ))}
      </div>
      <p className="source-note">
        These starting points draw on the knowledge base&apos;s{" "}
        <a href="https://github.com/prasannaunar/pmmkb/blob/main/BY-SITUATION.md">
          situation guide
        </a>{" "}
        and{" "}
        <a href="https://github.com/prasannaunar/pmmkb/blob/main/FRAMEWORK-MAP.md">
          framework relationships
        </a>
        . Adapt the sequence to your context.
      </p>
    </div>
  );
}
