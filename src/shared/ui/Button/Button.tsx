import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import buttonStyle from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.CLEAR,
    ...otherButtonProps
  } = props;

  console.log({ theme });

  return (
    <button
      {...otherButtonProps}
      className={classNames(buttonStyle.Button, {}, [
        className,
        buttonStyle[theme],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
