import Link from "next/link";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="page-shell reading-page">
      <header className="page-intro">
        <p className="eyebrow">404</p>
        <h1>This page could not be found</h1>
        <p className="lede">
          The link may be out of date, or the entry may have moved. Try search,
          or browse the full library.
        </p>
      </header>
      <p className="source-note">
        <Link href="/search">Search the knowledge base</Link>,{" "}
        <Link href="/topics">explore topics</Link> or{" "}
        <Link href="/">return to the home page</Link>.
      </p>
    </div>
  );
}
