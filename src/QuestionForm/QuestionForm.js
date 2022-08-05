import React, { useState } from "react";
import "./questionForm.css";
import QuestionBar from "./QuestionBar";
import QuestionUI from "./QuestionUI";
import Typography from "@material-ui/core/Typography";

const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);

  function addQuestion() {
    closeAllQuestions();
    setQuestions([
      ...questions,
      {
        questionText: "Set Question Here",
        questionType: "radio",
        options: [],
        open: true,
      },
    ]);
  }

  // Deleting a question is not in the designs but felt like a natural need

  function deleteQuestion(i) {
    let qs = [...questions];
    qs.splice(i, 1);
    setQuestions(qs);
  }

  function changeQuestion(text, i) {
    let newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  }

  function addQuestionType(i, type) {
    let quest = [...questions];
    quest[i].questionType = type;
    setQuestions(quest);
  }

  function changeOptionValue(text, i, j) {
    let questionOpts = [...questions];
    questionOpts[i].options[j].optionText = text;

    setQuestions(questionOpts);
  }

  function removeOption(i, j) {
    let optRemove = [...questions];
    optRemove[i].options.splice(j, 1);
    setQuestions(optRemove);
  }

  function closeAllQuestions() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function expandQuestion(i) {
    let qs = [...questions];
    if (qs[i].open === true) {
      qs[i].open = false;
    } else {
      qs[i].open = true;
    }
    setQuestions(qs);
  }

  function addOption(i) {
    let questionOptions = [...questions];
    // this is an arbitrary limit on the number of options.
    if (questionOptions.length < 5) {
      questionOptions[i].options.push({
        optionText: "Option" + (questionOptions[i].options.length + 1),
      });
      setQuestions(questionOptions);
    }
  }

  return (
    <div className="question_form">
      <div className="section">
        <div className="question_form_bar">
          {questions.length ? "" : <QuestionBar handleClick={addQuestion} />}
          <form>
            <div className="question_form_info">
              <Typography
                style={{
                  fontSize: "20px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                Form Title
              </Typography>
              <input type="text" className="question_form_info_title"></input>

              <Typography
                style={{
                  fontSize: "20px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                Form Description
              </Typography>
              <textarea className="question_form_info_desc"></textarea>
            </div>
          </form>
        </div>
        <QuestionUI
          questions={questions}
          addQuestion={addQuestion}
          deleteQuestion={deleteQuestion}
          changeQuestion={changeQuestion}
          addQuestionType={addQuestionType}
          changeOptionValue={changeOptionValue}
          removeOption={removeOption}
          expandQuestion={expandQuestion}
          addOption={addOption}
        />
      </div>
    </div>
  );
};

export default QuestionForm;
