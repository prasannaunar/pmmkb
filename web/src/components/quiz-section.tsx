"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { QuizQuestion } from "@/lib/quiz";

interface QuizSectionProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
  reviewLinks?: { href: string; label: string }[];
  nextLink?: { href: string; label: string };
}

type Stage = "start" | "question" | "end";

export function QuizSection({
  title,
  description,
  questions,
  reviewLinks,
  nextLink,
}: QuizSectionProps) {
  const [stage, setStage] = useState<Stage>("start");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(() =>
    questions.map(() => null),
  );
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (stage !== "start") headingRef.current?.focus();
  }, [stage, current]);

  if (questions.length === 0) return null;

  const correctCount = selected.reduce<number>(
    (sum, sel, i) =>
      sum + (sel !== null && questions[i].options[sel].correct ? 1 : 0),
    0,
  );

  function choose(questionIndex: number, optionIndex: number) {
    setSelected((prev) => {
      if (prev[questionIndex] !== null) return prev;
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function start() {
    setCurrent(0);
    setStage("question");
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      setStage("end");
    }
  }

  function retry() {
    setSelected(questions.map(() => null));
    setCurrent(0);
    setStage("start");
  }

  const q = questions[current];
  const sel = selected[current];
  const answered = sel !== null;
  const isLast = current === questions.length - 1;

  return (
    <section className="quiz-section entry-section-panel" aria-label={title}>
      <div className="quiz-header">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="text-xl font-semibold"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h2>
        {stage === "question" && (
          <span className="quiz-progress-label">
            Question {current + 1} of {questions.length}
          </span>
        )}
      </div>

      {description && stage !== "end" && (
        <p
          className="text-sm quiz-description"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}

      {stage === "question" && (
        <div className="quiz-progress-track" aria-hidden="true">
          <div
            className="quiz-progress-fill"
            style={{
              width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%`,
            }}
          />
        </div>
      )}

      {stage === "start" && (
        <div className="quiz-start">
          <p className="quiz-start-copy">
            {questions.length} practical scenarios. Choose an answer, explore
            the reasoning, and revisit the guide whenever you need.
          </p>
          <button type="button" className="quiz-start-button" onClick={start}>
            Start quiz
          </button>
        </div>
      )}

      {stage === "question" && (
        <div className="quiz-question">
          <p className="quiz-stem">
            <span className="quiz-number">{q.number}.</span> {q.stem}
          </p>
          <ul className="quiz-options">
            {q.options.map((opt, oi) => {
              const isSelected = sel === oi;
              let state: "idle" | "correct" | "incorrect" | "muted" = "idle";
              if (answered) {
                if (opt.correct) state = "correct";
                else if (isSelected) state = "incorrect";
                else state = "muted";
              }
              return (
                <li key={oi}>
                  <button
                    type="button"
                    className={`quiz-option quiz-option-${state}`}
                    onClick={() => choose(current, oi)}
                    disabled={answered}
                    aria-pressed={isSelected}
                  >
                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="quiz-option-text">{opt.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {answered && (
            <p
              role="status"
              className={
                "quiz-feedback " +
                (q.options[sel].correct
                  ? "quiz-feedback-correct"
                  : "quiz-feedback-incorrect")
              }
            >
              <strong>
                {q.options[sel].correct
                  ? "That's right. "
                  : "A different approach fits here. "}
              </strong>
              {q.options[sel].feedback}
            </p>
          )}
          {answered && reviewLinks?.[current] && (
            <Link className="quiz-review-link" href={reviewLinks[current].href}>
              {reviewLinks[current].label} →
            </Link>
          )}
          {answered && (
            <div className="quiz-nav">
              <button type="button" className="quiz-next" onClick={next}>
                {isLast ? "See results" : "Next question"}
              </button>
            </div>
          )}
        </div>
      )}

      {stage === "end" && (
        <div className="quiz-summary">
          <span className="quiz-summary-score">
            You scored {correctCount} of {questions.length}.
          </span>
          <button type="button" className="quiz-retry" onClick={retry}>
            Try again
          </button>
          <div className="quiz-follow-through">
            <p>
              {correctCount === questions.length
                ? "You connected the ideas well. Try applying one of them to a real decision."
                : "Use the explanations and the guides below to revisit the decisions that need more practice."}
            </p>
            {reviewLinks && (
              <ul>
                {reviewLinks
                  .filter(
                    (link, i, all) =>
                      selected[i] !== null &&
                      !questions[i].options[selected[i]!].correct &&
                      all.findIndex(
                        (other, j) =>
                          other.href === link.href &&
                          selected[j] !== null &&
                          !questions[j].options[selected[j]!].correct,
                      ) === i,
                  )
                  .map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label} →</Link>
                    </li>
                  ))}
              </ul>
            )}
            {nextLink && (
              <Link className="text-link" href={nextLink.href}>
                {nextLink.label} →
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
