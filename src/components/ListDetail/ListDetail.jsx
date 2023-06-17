import s from "./style.module.css";

export const ListDetail = ({ logo, text }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={logo} alt="logo" />
      <p className={s.detail}>{text}</p>
    </div>
  );
};
