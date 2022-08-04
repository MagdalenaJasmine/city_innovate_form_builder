import React, { useState } from "react";
import "./questionForm.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Button, IconButton, Radio, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";
import SubjectIcon from "@mui/icons-material/Subject";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";

const QuestionForm = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Question 1",
      questionType: "radio",
      options: [
        { optionText: "Option a" },
        { optionText: "Option b" },
        { optionText: "Option c" },
      ],
      open: true,
    },
    {
      questionText: "Question 2",
      questionType: "radio",
      options: [{ optionText: "Option 1" }, { optionText: "Option 2" }],
      open: true,
    },
  ]);

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
    let optToRemove = [...questions];
    if (optToRemove[i].options.length > 1) {
      optToRemove[i].options.splice(j, 1);
      setQuestions(optToRemove);
    }
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={ques.open === true}
          className={ques.open ? "add border" : ""}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {!questions[i].open ? (
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        disabled
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        control={
                          <input
                            type={ques.questionType}
                            style={{ marginRight: "3px" }}
                          ></input>
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto,Arial,sans-serif",
                              fontSize: "13px",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "202124",
                            }}
                          >
                            {op.optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>
          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                  // allows us to change the question
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                ></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                >
                  <MenuItem
                    id="text"
                    value="Text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} />
                    Text
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="Checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Checkbox
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    ></Radio>
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add_question_body" key={j}>
                  {ques.questionType != "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text_input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                      onChange={(e) => {
                        changeOptionValue(e.target.value, i, j);
                      }}
                    ></input>
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <CloseIcon
                      onClick={() => {
                        removeOption(i, j);
                      }}
                    />
                  </IconButton>
                </div>
              ))}
              {ques.options.length < 5 ? (
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      ques.questionType != "text" ? (
                        <input
                          type={ques.questionType}
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                      ) : (
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      )
                    }
                    label={
                      <div>
                        {" "}
                        <input
                          type="text"
                          className="text_input"
                          style={{ fontSize: "13px", width: "80px" }}
                          placeholder="Add Option"
                        ></input>
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}
            </AccordionDetails>
            <div className="question_edit">
              <AddCircleOutlineIcon className="edit" />
              <OndemandVideoIcon className="edit" />
              <CropOriginalIcon className="edit" />
              <TextFieldsIcon className="edit" />
            </div>
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_form_top">
            <label>Form Title</label>
            <input type="text" className="question_form_top_title"></input>

            <label>Form Description</label>
            <textarea className="question_form_top_desc"></textarea>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
