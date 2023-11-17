import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import appLinkStyle from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherLinkProps
  } = props;

  return (
    <Link
      to={to}
      {...otherLinkProps}
      className={classNames(appLinkStyle.AppLink, {}, [
        className,
        appLinkStyle[theme],
      ])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
