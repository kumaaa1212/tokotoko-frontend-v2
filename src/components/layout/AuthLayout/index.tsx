import style from "components/layout/AuthLayout/index.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={style.main}>
      <div className={style.container}>
      {children}
      </div>
    </div>
  );
}
