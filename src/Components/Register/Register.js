import "./Register.css";

import { register } from "../../loginService";
import { useRef, useState } from "react";
import { useNotifyContext } from "../../notifyContext";

export const Register = () => {
  const { notificationReactor } = useNotifyContext();

  const initialErrorState = {
    user: "",
    email: "",
    password: "",
    rePassword: "",
  };
  const [errors, setErors] = useState(initialErrorState);

  const use = useRef("");
  const pas = useRef("");
  const ema = useRef("");
  const rePas = useRef("");

  const registerHandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "user":
        if (!use.current.value.match(/[a-zA-Z0-9]{5,}/)) {
          setErors((prevState) => {
            return { ...prevState, user: "inCorrect" };
          });
        } else {
          setErors((prevState) => {
            return { ...prevState, user: "filled" };
          });
        }
        break;
      case "email":
        if (!ema.current.value.match(/.+@[^@]+\.[^@]{2,}$/)) {
          setErors((prevState) => {
            return { ...prevState, email: "inCorrect" };
          });
        } else {
          setErors((prevState) => {
            return { ...prevState, email: "filled" };
          });
        }
        break;
      case "password":
        if (pas.current.value.length === 0) {
          setErors((prevState) => {
            return { ...prevState, password: "inCorrect" };
          });
        } else {
          setErors((prevState) => {
            return { ...prevState, password: "filled" };
          });
        }
        break;
      case "rePassword":
        if (rePas.current.value.length === 0) {
          setErors((prevState) => {
            return { ...prevState, rePassword: "inCorrect" };
          });
        } else {
          setErors((prevState) => {
            return { ...prevState, rePassword: "filled" };
          });
        }
        break;

      default:
        return;
    }
  };

  const loginhandler = (e) => {
    e.preventDefault(e);
    const user = use.current.value;
    const email = ema.current.value;
    const password = pas.current.value;
    const rePassword = rePas.current.value;
    if (rePassword === password) {
      register(user, email, password).then((data) => {});
      e.target.reset();
    } else {
      notificationReactor("Password and repeat password must be the same!");
    }
  };

  return (
    <form onSubmit={loginhandler} className="colors">
      <label htmlFor="user">User</label>
      <input
        id="user"
        type="text"
        name="user"
        onBlur={registerHandler}
        placeholder="Nasko"
        ref={use}
        className={errors.user==='inCorrect' ? "errorInput" : ""}
      />
      {errors.user === "inCorrect" ? (
        <p className="errorParagraph">Incorrect User!</p>
      ) : (
        ""
      )}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onBlur={registerHandler}
        ref={ema}
        placeholder="nasko@abv.bg"
        className={errors.email==='inCorrect' ? "errorInput" : ""}


      />
      {errors.email === "inCorrect" ? (
        <p className="errorParagraph">Incorrect Email!</p>
      ) : (
        ""
      )}

      <label htmlFor="pas">Password</label>
      <input
        id="pas"
        type="password"
        name="password"
        onBlur={registerHandler}
        ref={pas}
        placeholder="******"
        className={errors.password==='inCorrect' ? "errorInput" : ""}


      />
      {errors.password === "inCorrect" ? (
        <p className="errorParagraph">Incorrect Password!</p>
      ) : (
        ""
      )}

      <label htmlFor="rePas">Repeat password</label>
      <input
        id="rePas"
        type="password"
        name="rePassword"
        onBlur={registerHandler}
        ref={rePas}
        placeholder="******"
        className={errors.rePassword==='inCorrect' ? "errorInput" : ""}

      />
      {errors.rePassword === "inCorrect" ? (
        <p className="errorParagraph">Incorrect Repeat Password!</p>
      ) : (
        ""
      )}

      <button
        disabled={
          !(
            errors.user === "filled" &&
            errors.email === "filled" &&
            errors.password === "filled" &&
            errors.rePassword === "filled"
          )
        }
      >
        Register
      </button>
    </form>
  );
};
