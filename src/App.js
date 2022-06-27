import React, { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football"
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "United States"],
    rightAnswer: "Russia"
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "United States"],
    rightAnswer: "Russia"
  },
  {
    question: "What is the 100th digit of Pi?",
    choices: ["9", "4", "7"],
    rightAnswer: 9
  }
];
export default function App() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const restart = () => {
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
  };
  const submit = (e) => {
    e.preventDefault();
    if (answer === questions[questionIndex].rightAnswer) {
      setScore((score) => score + 1);
    }
    if (questionIndex < questions.length) {
      setQuestionIndex((i) => i + 1);
    }
  };
  if (questionIndex < questions.length) {
    return (
      <div>
        <label>{questions[questionIndex].question}</label>
        {questions[questionIndex].choices.map((c, i) => {
          return (
            <div>
              <input
                type="radio"
                name="choice"
                value={c}
                onChange={(e) => setAnswer(e.target.value)}
                checked={answer === c}
              />
              {c}
            </div>
          );
        })}
        <button type="button" onClick={submit}>
          check
        </button>
        <p>
          <span className="">score:</span> <span className="res">{score}</span>
        </p>
      </div>
    );
  } else {
    return (
      <form>
        <div v-else>
          <button type="button" onClick={restart}>
            restart
          </button>
        </div>
        <p>
          <span>score:</span> {score}
        </p>
      </form>
    );
  }
}

