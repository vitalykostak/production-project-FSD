import { FC } from "react";
import { routePaths } from "shared/config/routeConfig/routeConfig";
import navbarStyles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(["main", "about"]);

  return (
    <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <AppLink to={routePaths.main} theme={AppLinkTheme.PRIMARY}>
          {t("main:main")}
        </AppLink>
        <AppLink to={routePaths.about} theme={AppLinkTheme.PRIMARY}>
          {t("about:about")}
        </AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
