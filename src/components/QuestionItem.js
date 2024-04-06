import React, { useState } from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  const [value, setValue] = useState("");

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDropDownChange(event) {
    // setValue(event.target.value);
    // console.log(event.target.value);
    const valueData = { correctIndex: event.target.value };
    const updateFetch = async () => {
      console.log(question.id);
      const response = await fetch(
        `http://localhost:4000/questions/${question.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valueData),
        }
      );
    };
    updateFetch();
  }

  function handleDeleteClick() {
    const deleteFetch = async () => {
      const response = await fetch(
        `http://localhost:4000/questions/${question.id}`,
        {
          method: "DELETE",
        }
      );
      onDeleteQuestion(question);
    };
    deleteFetch();
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label onChange={handleDropDownChange}>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
