import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import "./questionBar.css";

const QuestionBar = ({ handleClick }) => {
  return (
    <div className="question_edit_bar">
      <AddCircleOutlineIcon className="edit" onClick={handleClick} />
      {/* The below options do not currently work on the question bar */}
      <OndemandVideoIcon className="edit" />
      <CropOriginalIcon className="edit" />
      <TextFieldsIcon className="edit" />
    </div>
  );
};

export default QuestionBar;
