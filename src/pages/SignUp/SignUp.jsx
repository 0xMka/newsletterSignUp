import s from "./style.module.css";
import icon_list from "../../assets/images/icon-list.svg";
import { ListDetail } from "../../components/ListDetail/ListDetail";
import { FormSubscribe } from "../../components/FormSubscribe/FormSubscribe";

export const SignUp = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.img_illustration} src="" alt="illustration image" />
        <div className={s.content}>
          <h3 className={s.title}>Stay updated!</h3>
          <p className={s.description}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className={s.content_detail}>
            <ListDetail
              logo={icon_list}
              text="Product discovery and building what matters"
            />
            <ListDetail
              logo={icon_list}
              text="Measuring to ensure updates are a success"
            />
            <ListDetail logo={icon_list} text="And much more!" />
          </div>
          <FormSubscribe />
        </div>
      </div>
    </div>
  );
};
