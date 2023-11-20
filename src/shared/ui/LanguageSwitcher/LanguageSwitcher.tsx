import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { Button, ThemeButton } from "shared/ui/";
import languageSwitcherStyle from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";

export enum Language {
  EN = "en",
  UA = "ua",
}

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation("translation");

  const toggleLanguage = () => {
    const newOne = getFollowingLanguage();

    changeLanguage(newOne);
  };

  const getFollowingLanguage = () =>
    i18n.language === Language.EN ? Language.UA : Language.EN;

  const changeLanguage = (ln: Language) => i18n.changeLanguage(ln);

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames(languageSwitcherStyle.LanguageSwitcher, {}, [
        className,
      ])}
      theme={ThemeButton.CLEAR}
    >
      {t("language")}
    </Button>
  );
};

export default LanguageSwitcher;
