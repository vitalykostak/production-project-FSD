import { FC } from "react";
import { routePaths } from "shared/config/routeConfig/routeConfig";
import navbarStyles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <AppLink to={routePaths.main} theme={AppLinkTheme.PRIMARY}>
          Main
        </AppLink>
        <AppLink to={routePaths.about} theme={AppLinkTheme.PRIMARY}>
          About
        </AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
