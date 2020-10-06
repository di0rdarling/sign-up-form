import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const usesStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(163deg, #FF5858 0%, #FFC8C8 100%)`,
    height: "100vh",
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  form: {
    width: 300,
    backgroundColor: "white",
    padding: theme.spacing(3),
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
  },
  formSection: {
    marginBottom: theme.spacing(3),
  },
  input: {
    outline: "none",
    border: "none",
    borderBottom: "solid black thin",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: 20,
    border: "none",
    backgroundColor: "#FF5858",
    color: "white",
    outline: "none",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    margin: `${theme.spacing(1)}px ${theme.spacing(0)} ${theme.spacing(0)}`,
  },
  confirmationBox: {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  },
}));

function SubmitForm() {
  let classes = usesStyles();
  let [isAccountCreated, setAccountCreated] = useState(false);
  let [error, setError] = useState({
    error: false,
    message: "",
  });
  let [account, setAccount] = useState({
    email: "",
    password: "",
  });

  function isValidEmail() {
    let valid = true;
    if (!account.email.includes("@")) {
      setError({ error: true, message: "Please enter a valid email address" });
      valid = false;
    }
    return valid;
  }

  function handleSubmit() {
    //TODO: Validate password.
    if (isValidEmail()) {
      setAccountCreated(true);
    }
  }

  return (
    <div className={classes.root}>
      {isAccountCreated ? (
        <div>
          <h1>Submission Confirmed!</h1>
        </div>
      ) : (
        <div container className={classes.form}>
          <h1>Create Account</h1>
          <div item className={classes.formSection}>
            <input
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
              className={classes.input}
              placeholder="EMAIL"
            />
            {error && <p className={classes.error}>{error.message}</p>}
          </div>
          <div item className={classes.formSection}>
            <input
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
              className={classes.input}
              placeholder="PASSWORD"
              type="password"
            />
            <p>Password must contain:</p>
            <ul>
              <li>A captial letter</li>
              <li>A speacial character e.g. ?!*</li>
              <li>At least eight characters</li>
            </ul>
          </div>
          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              type="button"
              onClick={() => handleSubmit()}
            >
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitForm;
