import { useEffect, useState, useRef } from "react";
import "./signUpForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../../public/images/icono-hojas.webp";
import React from "react";
import { login, signUp2 } from "../../services/auth.service";
import { InfoContext } from "../../context/infoContext";
import { useContext } from "react";

const USER_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]{3,30}$/;
const LASTNAME_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]{3,30}$/;
const PHONE_REGEX = /^\d{9}$/;

const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validlastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

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

  const {setInfo} = useContext(InfoContext)

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    const result = LASTNAME_REGEX.test(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    setValidPass(result);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => setErrMsg("")), [user, email, pass, matchPass];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const secureEmail = EMAIL_REGEX.test(email);
    const securePass = PASS_REGEX.test(pass);
    const secureUser = USER_REGEX.test(user);

    if (!secureEmail || !securePass || !secureUser) {
      setErrMsg("Not valid entry");
      return;
    }
    try {
      const response = await signUp2(user, lastName, email, pass, phone);
      
      if (response) {
          console.log(response.newUser)
          setInfo(response.newUser)
          setSuccess(true);
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 403) {
        setErrMsg("Email ya registrado");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div className="successContainer">
          <div className="successRegister">
            <h1 className="successTitle">Registro exitoso</h1>
            <img
              src={logo}
              className="successIcon"
              alt="Logo de Fisio Travell"
            />
            <button className="successButton">
              <Link to="/profile/:profileId">Accede</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="loginContainer">
          <p ref={errRef} className={errMsg ? "errmsg" : "hide"}>
            {errMsg}
          </p>
          <div className="loginBox">
            <h1 className="titleLog">Registro</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="user" className="asterisk">
                Nombre:
                {validUser && (
                  <FontAwesomeIcon icon={faCheck} className="valid" />
                )}
                {!validUser && user && (
                  <FontAwesomeIcon icon={faXmark} className="invalid" />
                )}
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setUser(e.target.value)}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                className={
                  !validUser && userFocus && user ? "instructions" : "hide"
                }
              >
                <FontAwesomeIcon icon={faCircleExclamation} />
                Debe tener mínimo tres letras. <br />
              </p>

              <label htmlFor="lastName">
                Apellidos:
                {validlastName && (
                  <FontAwesomeIcon icon={faCheck} className="valid" />
                )}
                {!validlastName && lastName && (
                  <FontAwesomeIcon icon={faXmark} className="invalid" />
                )}
              </label>
              <input
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
              />
              <p
                className={
                  !validlastName && lastNameFocus && lastName
                    ? "instructions"
                    : "hide"
                }
              >
                <FontAwesomeIcon icon={faCircleExclamation} />
                Debe tener mínimo tres letras. <br />
              </p>
              <label htmlFor="phone">
                Teléfono:
                {validPhone && (
                  <FontAwesomeIcon icon={faCheck} className="valid" />
                )}
                {!validPhone && phone && (
                  <FontAwesomeIcon icon={faXmark} className="invalid" />
                )}
              </label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
              />
              <p
                className={
                  !validPhone && phoneFocus && phone ? "instructions" : "hide"
                }
              >
                <FontAwesomeIcon icon={faCircleExclamation} />
                Debe tener 9 dígitos.
              </p>
              <label htmlFor="email" className="asterisk">
                Email:
                {validEmail && (
                  <FontAwesomeIcon icon={faCheck} className="valid" />
                )}
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
              <label htmlFor="password" className="asterisk">
                Contraseña:
                {validPass && (
                  <FontAwesomeIcon icon={faCheck} className="valid" />
                )}
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
                  !validMatch && matchFocus && matchPass
                    ? "instructions"
                    : "hide"
                }
              >
                <FontAwesomeIcon icon={faCircleExclamation} />
                Las contraseñas no coinciden.
              </p>
              <span className="buttonContainer">
                <button
                  className="logButton"
                  disabled={
                    !validEmail || !validPass || !validMatch || !validUser
                      ? true
                      : false
                  }
                >
                  Registrarse
                </button>
              </span>
            </form>

            <p>¿Ya estas registrado?</p>
            <span className="access">
              <Link to="/Login">Acceder</Link>
            </span>
            <span>
              <p className="required">*Campos requeridos.</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
