import s from "./style.module.css";
import icon_success from "../../assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.content}>
          <img className={s.icon} src={icon_success} alt="icon success" />
          <h3 className={s.title}>Thanks for subscribing!</h3>
          <p className={s.text}>
            A confirmation email has been sent to <b>ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <button onClick={() => navigate("/")} className={s.btn}>
          Dismiss message
        </button>
      </div>
    </div>
  );
};
