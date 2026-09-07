"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/quiz";

interface QuizSectionProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
}

type Stage = "start" | "question" | "end";

export function QuizSection({ title, description, questions }: QuizSectionProps) {
  const [stage, setStage] = useState<Stage>("start");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );

  if (questions.length === 0) return null;

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
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}
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
        <p className="text-sm quiz-description" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}

      {stage === "question" && (
        <div className="quiz-progress-track" aria-hidden="true">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      )}

      {stage === "start" && (
        <div className="quiz-start">
          <p className="quiz-start-copy">
            Test your knowledge of {title.replace(/^Quiz:\s*/i, "")} with {questions.length}{" "}
            questions.
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
                    <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                    <span className="quiz-option-text">{opt.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {answered && (
            <p
              className={
                "quiz-feedback " +
                (q.options[sel].correct ? "quiz-feedback-correct" : "quiz-feedback-incorrect")
              }
            >
              {q.options[sel].feedback}
            </p>
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
            Retry
          </button>
        </div>
      )}
    </section>
  );
}
