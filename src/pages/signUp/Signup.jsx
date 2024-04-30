import { useEffect, useState, useRef } from "react";
import "./signup.css";

import React from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*A-Z)(?=.[0-9])(?=.*[!@#&%]){8,16}$/;

import React from "react";

const Signup = () => {
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
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  });

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    console.log(result);
    console.log(email);
    setValidEmail(result);
    const match = pass === matchPass;
    setValidPass = match;
  })[(pass, matchPass)];

  useEffect(() => setErrMsg("")), [email, pass, matchPass];

  return;
  <div>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
      <h1>Registro</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
          required
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </form>
      {errMsg}
    </p>
  </div>;
};

export default Signup;
