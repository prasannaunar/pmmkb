// Site events for Google Tag Manager. Each event is pushed to the dataLayer as
// { event, ...params }, and a matching custom event trigger in the GTM
// container sends it to GA4 (see web/gtm/README.md). Nothing is pushed unless
// the visitor has accepted analytics cookies.

/** localStorage key holding the visitor's choice ("granted" or "denied"). */
export const CONSENT_KEY = "analytics-consent";

export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    return saved === "granted" || saved === "denied" ? saved : null;
  } catch {
    return null;
  }
}

/** The events the site sends, with their parameters. */
export type SiteEvent =
  | { event: "quiz_start"; quiz_type: QuizType; quiz_id: string }
  | {
      event: "quiz_answer";
      quiz_type: QuizType;
      quiz_id: string;
      question_number: number;
      answer_correct: boolean;
    }
  | {
      event: "quiz_complete";
      quiz_type: QuizType;
      quiz_id: string;
      quiz_score: number;
      quiz_total: number;
    }
  | { event: "search"; search_term: string; search_results: number }
  | { event: "theme_change"; theme: "light" | "dark" };

export type QuizType = "entry" | "category" | "learning_path";

export function track(data: SiteEvent) {
  if (readConsent() !== "granted") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(data);
}
