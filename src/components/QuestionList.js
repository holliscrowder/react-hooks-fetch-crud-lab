import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({
  questions,
  setQuestions,
  onDeleteQuestion,
  onUpdateQuestion,
}) {
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/questions");
      const questions = await response.json();
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateQuestion={onUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
