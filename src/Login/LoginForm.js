import { Button } from "@material-ui/core";
import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";
import Typography from "@material-ui/core/Typography";

// This is the layout of a login form without any authentication.
const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login_form">
        <PageHeader />

        <div className="login_section">
          <form>
            <div className="login-wrapper">
              <Typography
                style={{
                  fontSize: "24px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Login
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                Email
              </Typography>
              <input type="text" className="login_form_field" />

              <Typography
                style={{
                  fontSize: "18px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                Password
              </Typography>
              <input type="password" className="login_form_field" />
              <div className="login_button_container">
                <button
                  type="submit"
                  className="login_button"
                  onClick={() => navigate("/form")}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
