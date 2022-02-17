import { useEffect, useState } from 'react';
import { defaultTheme, darkTheme } from './theme/themes';

export const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  function changeTheme() {
    const themeId = theme.id;
    switch (themeId) {
      case 1:
        return setTheme(darkTheme);
      case 2:
        return setTheme(defaultTheme);
    }
  }

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return { theme, changeTheme };
};
