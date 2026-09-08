import Link from "next/link";
import { Search } from "@/components/search";
import { getDiscoveryIndex } from "@/lib/discovery";
export const metadata = {
  title: "Search",
  description:
    "Search frameworks, situations and learning paths in the product marketing knowledge base.",
};
export default function SearchPage() {
  return (
    <div className="page-shell reading-page">
      <header className="page-intro">
        <p className="eyebrow">Find your next useful idea</p>
        <h1>Search the knowledge base</h1>
        <p className="lede">
          Look up a method by name, describe a challenge, or search for an idea
          within the guides.
        </p>
      </header>
      <Search entries={getDiscoveryIndex()} expanded />
      <p className="source-note">
        Prefer to browse? <Link href="/topics">Explore topics</Link> or{" "}
        <Link href="/challenges">start with a challenge</Link>.
      </p>
    </div>
  );
}
