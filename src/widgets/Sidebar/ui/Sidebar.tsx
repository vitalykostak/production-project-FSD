import { FC, useState } from "react";
import sidebarStyles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher, LanguageSwitcher } from "shared/ui";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>();

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(
        sidebarStyles.Sidebar,
        { [sidebarStyles.collapsed]: collapsed },
        [className],
      )}
    >
      <button onClick={toggleSidebar}>toggle</button>
      <div className={sidebarStyles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={classNames(sidebarStyles.languageSwitcherContainer)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
