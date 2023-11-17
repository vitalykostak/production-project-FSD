import { FC, useMemo, useState } from "react";

import {
  LOCAL_STORAGE_UI_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";

type Props = {
  children: React.ReactNode;
};

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_UI_THEME_KEY) as Theme;

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || Theme.LIGHT);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
