import { useRef, useState } from "react";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

export const FormSubscribe = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleInputChange = () => {
    const emailInput = emailInputRef.current;
    const notValidSpan = emailInputRef.current.parentNode.querySelector(
      `.${s.notValid}`
    );
    const isValid = emailInput.validity.valid;

    if (isValid) {
      emailInput.classList.remove(s.invalid);
      notValidSpan.style.display = "none";
    } else {
      emailInput.classList.add(s.invalid);
      notValidSpan.style.display = "block";
    }
    setIsEmailValid(isValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label className={s.label} htmlFor="emailInput">
        Email address
        <span className={s.notValid}>Valid email required</span>
      </label>
      <input
        ref={emailInputRef}
        className={`${s.input}`}
        type="email"
        id="emailInput"
        placeholder="email@company.com"
        required
        onInput={handleInputChange}
      />
      <button type="submit" disabled={!isEmailValid} className={s.btn}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};
