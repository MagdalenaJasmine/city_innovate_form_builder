import "./questionUI.css";
import React from "react";
import "./questionForm.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { IconButton, Radio, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";
import SubjectIcon from "@mui/icons-material/Subject";
import DeleteIcon from "@mui/icons-material/Delete";
import QuestionBar from "./QuestionBar";

const QuestionUI = ({
  questions,
  addQuestion,
  deleteQuestion,
  changeQuestion,
  addQuestionType,
  changeOptionValue,
  removeOption,
  expandQuestion,
  addOption,
}) => {
  return questions.map((ques, i) => (
    <div className="question_section" key={i}>
      {ques.open ? <QuestionBar handleClick={addQuestion} /> : ""}
      <div className="question_accordion_box">
        <div className="question_boxes">
          <Accordion
            expanded={ques.open === true}
            className={ques.open ? "add border" : ""}
            onChange={() => {
              expandQuestion(i);
            }}
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

            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                ></input>
                <div className="question_type_select">
                  <MenuItem
                    id="text"
                    value="Text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon className="question_type_selector" />
                    Text
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="Checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    <CheckBoxIcon className="question_type_selector" checked />
                    Checkbox
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    <Radio className="question_type_selector"></Radio>
                    Multiple Choice
                  </MenuItem>
                </div>
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
                  <IconButton aria-label="delete">
                    <CloseIcon
                      onClick={() => {
                        removeOption(i, j);
                      }}
                    />
                  </IconButton>
                </div>
              ))}
              {ques.options.length < 5 && ques.questionType != "text" ? (
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
                        <button
                          className="add_option_button"
                          onClick={() => {
                            addOption(i);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}
              <IconButton
                aria-label="delete question"
                onClick={() => {
                  deleteQuestion(i);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  ));
};

export default QuestionUI;
