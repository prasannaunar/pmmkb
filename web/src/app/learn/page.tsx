import Link from "next/link";
import { learningPaths } from "@/lib/guides";
export const metadata = {
  title: "Learning paths",
  description:
    "Build product marketing judgement through guided reading and scenario quizzes.",
};
export default function LearnPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Read. Connect. Put it into practice.</p>
        <h1>Build your understanding.</h1>
        <p className="lede">
          Follow a short sequence of guides, see how the ideas fit together, and
          test your judgement with a path-specific quiz. Start anywhere; return
          whenever you need a refresher.
        </p>
      </header>
      <div className="path-directory">
        {learningPaths.map((g, i) => (
          <Link href={`/learn/${g.slug}`} key={g.slug}>
            <span className="path-number" aria-hidden="true">
              0{i + 1}
            </span>
            <div>
              <p className="eyebrow">
                {g.steps.length} entries · 5 practice questions
              </p>
              <h2>{g.title}</h2>
              <p>{g.description}</p>
              <span className="text-link">Explore this path →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
