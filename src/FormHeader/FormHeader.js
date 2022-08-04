import React from "react";
import "./formHeader.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import { Tabs } from "@material-ui/core";

// overrides material UI style for Paper
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  tabs: {
    height: 10,
  },
});
const FormHeader = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Tabs textColor="primary" indicatorColor="primary">
          <Tab label="Form" className={classes.tab}></Tab>
        </Tabs>
      </Paper>
    </div>
  );
};

export default FormHeader;
