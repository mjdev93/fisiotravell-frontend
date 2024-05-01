import { useEffect, useState, useRef } from "react";
import "./signUpForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import React from "react";

const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => setErrMsg("")), [email, pass, matchPass];

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
        <h1 className="titleLog">Registro</h1>
        <form>
          <label htmlFor="email">
            Email:
            {validEmail && <FontAwesomeIcon icon={faCheck} className="valid" />}
            {!validEmail && email && (
              <FontAwesomeIcon icon={faXmark} className="invalid" />
            )}
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            required
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
          />
        </form>
        <form>
          <label htmlFor="password">
            Contraseña:
            {validPass && <FontAwesomeIcon icon={faCheck} className="valid" />}
            {!validPass && pass && (
              <FontAwesomeIcon icon={faXmark} className="invalid" />
            )}
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPass(e.target.value)}
            required
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
          />
          <p
            className={
              !validPass && passFocus && pass ? "instructions" : "hide"
            }
          >
            <FontAwesomeIcon icon={faCircleExclamation} />
            Debe tener entre 8 y 24 caracteres. <br />
            Debe contener al menos minúscula, una mayúscula, un número y un
            símbolo. <br />
            Símbolos permitidos: !@#$% <br />
          </p>
        </form>
        <form>
          <label htmlFor="password">
            Confirme la contraseña:
            {validMatch && matchPass && (
              <FontAwesomeIcon icon={faCheck} className="valid" />
            )}
            {!validMatch && matchPass && (
              <FontAwesomeIcon icon={faXmark} className="invalid" />
            )}
          </label>
          <input
            type="password"
            id="confirmPass"
            onChange={(e) => setMatchPass(e.target.value)}
            value={matchPass}
            required
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            className={
              !validMatch && matchFocus && matchPass ? "instructions" : "hide"
            }
          >
            <FontAwesomeIcon icon={faCircleExclamation} />
            Las contraseñas no coinciden.
          </p>
        </form>
        <span className="buttonContainer">
          <button
            className="logButton"
            disabled={!validEmail || !validPass || !validMatch ? true : false}
          >
            Registrarse
          </button>
        </span>

        <p>¿Ya estas registrado?</p>
        <span>
          <Link to="/Login">Acceder</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
