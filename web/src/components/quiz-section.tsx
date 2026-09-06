"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/quiz";

interface QuizSectionProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
}

export function QuizSection({ title, description, questions }: QuizSectionProps) {
  const [selected, setSelected] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );

  if (questions.length === 0) return null;

  const answeredCount = selected.filter((s) => s !== null).length;
  const allAnswered = answeredCount === questions.length;
  const correctCount = selected.reduce<number>(
    (sum, sel, i) => sum + (sel !== null && questions[i].options[sel].correct ? 1 : 0),
    0
  );

  function choose(questionIndex: number, optionIndex: number) {
    setSelected((prev) => {
      if (prev[questionIndex] !== null) return prev;
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function retry() {
    setSelected(questions.map(() => null));
  }

  return (
    <section className="quiz-section entry-section-panel" aria-label={title}>
      <div className="quiz-header">
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}
        >
          {title}
        </h2>
        <span className="quiz-progress-label" style={{ color: "var(--text-tertiary)" }}>
          {allAnswered
            ? `${correctCount} of ${questions.length} correct`
            : `${answeredCount} of ${questions.length} answered`}
        </span>
      </div>

      {description && (
        <p className="text-sm quiz-description" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}

      <div className="quiz-progress-track" aria-hidden="true">
        <div
          className="quiz-progress-fill"
          style={{ width: `${(answeredCount / questions.length) * 100}%` }}
        />
      </div>

      <ol className="quiz-question-list">
        {questions.map((q, qi) => {
          const sel = selected[qi];
          const answered = sel !== null;
          return (
            <li key={qi} className="quiz-question">
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
                        onClick={() => choose(qi, oi)}
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
              {sel !== null && (
                <p
                  className={
                    "quiz-feedback " +
                    (questions[qi].options[sel].correct
                      ? "quiz-feedback-correct"
                      : "quiz-feedback-incorrect")
                  }
                >
                  {questions[qi].options[sel].feedback}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {allAnswered && (
        <div className="quiz-summary">
          <span>
            You scored {correctCount} of {questions.length}.
          </span>
          <button type="button" className="quiz-retry" onClick={retry}>
            Retry
          </button>
        </div>
      )}
    </section>
  );
}
