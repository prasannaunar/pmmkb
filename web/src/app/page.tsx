import Link from "next/link";
import { getAllCategories } from "@/lib/content";
import { getDiscoveryIndex } from "@/lib/discovery";
import { Search } from "@/components/search";
export default function HomePage() {
  const categories = getAllCategories();
  const challenges = [
    [
      "messaging",
      "Our messaging sounds generic",
      "Find your differentiation. Turn it into a message buyers understand.",
    ],
    [
      "launch",
      "We're launching a product",
      "Decide the scope, choose your motion, and bring the right work together.",
    ],
    [
      "competition",
      "We keep losing to a competitor",
      "Understand the loss before rewriting the pitch.",
    ],
    [
      "adoption",
      "Customers aren't finding value",
      "Connect your promise to onboarding, adoption and retention.",
    ],
    [
      "pricing",
      "We need to rethink pricing",
      "Work through value, willingness to pay and packaging.",
    ],
    [
      "planning",
      "Too many priorities, too little time",
      "Turn business goals into focused PMM work.",
    ],
  ];
  return (
    <div className="page-shell">
      <section className="home-intro">
        <div>
          <p className="eyebrow">The product marketing field guide</p>
          <h1>
            Good judgement.
            <br />
            <em>Built through practice.</em>
          </h1>
          <p className="lede">
            Find the right framework for the decision in front of you.
            Understand it, try it, and make it part of your practice.
          </p>
          <Search entries={getDiscoveryIndex()} />
        </div>
        <aside className="start-feature">
          <p className="eyebrow">New here? Start with the foundations</p>
          <h2>See how the pieces fit.</h2>
          <p>
            Connect customer understanding, positioning and messaging in one
            guided reading path.
          </p>
          <Link className="text-link" href="/learn/foundations">
            Build your PMM foundations <span aria-hidden="true">→</span>
          </Link>
          <div
            className="mini-sequence"
            aria-label="Understand, position, communicate"
          >
            <span>Understand</span>
            <span>Position</span>
            <span>Communicate</span>
          </div>
        </aside>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start with your situation</p>
            <h2>What are you working on?</h2>
          </div>
          <Link className="text-link" href="/challenges">
            All challenges →
          </Link>
        </div>
        <div className="challenge-grid">
          {challenges.map(([slug, title, description]) => (
            <Link
              className="challenge-link"
              key={slug}
              href={`/challenges/${slug}`}
            >
              <h3>
                {title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A little deeper</p>
            <h2>Learn something you can use.</h2>
          </div>
        </div>
        <div className="editorial-grid">
          <Link
            className="feature-story"
            href="/framework/geoffrey-moores-positioning-statement-framework"
          >
            <p className="eyebrow">Framework in focus</p>
            <h3>
              A clear position.
              <br />
              In one paragraph.
            </h3>
            <p>
              Use Geoffrey Moore&apos;s template to make six decisions your
              messaging depends on.
            </p>
            <span className="text-link">Read the field guide →</span>
          </Link>
          <div className="story-stack">
            <Link href="/framework/value-proposition-canvas#example">
              <p className="eyebrow">Learn through an example</p>
              <h3>From a customer problem to a value proposition</h3>
              <p>
                See the Value Proposition Canvas applied in a worked example.
              </p>
              <span className="text-link">Explore the example →</span>
            </Link>
            <Link href="/learn/positioning-to-messaging">
              <p className="eyebrow">Guided learning</p>
              <h3>Turn positioning into messaging</h3>
              <p>
                Move from differentiated value to a shared message, then test
                it.
              </p>
              <span className="text-link">Follow the learning path →</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-block" id="library">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2>The complete library</h2>
          </div>
          <span className="metadata">
            {categories.reduce((n, c) => n + c.entries.length, 0)} entries ·{" "}
            {categories.length} topics
          </span>
        </div>
        <div className="topic-index">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span>{cat.title.replace(/^Category \d+: /, "")}</span>
              <span className="metadata">
                {cat.entries.length}{" "}
                {cat.entries.length === 1 ? "entry" : "entries"}{" "}
                <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
