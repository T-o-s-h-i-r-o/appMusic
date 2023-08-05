import React, {useContext} from "react";

export const themes = {
    light: {
      backgroundApp: '#FFF',

      backgroundBurger: '#000000',
      backgroundNav: '#F6F5F3',
      colorText: '#000000',
    },
    dark: {
      backgroundApp: '#181818',

      backgroundBurger: '#D3D3D3',
      backgroundNav: '#1C1C1C',
      colorText: '#FFFFFF',
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });
  
  
  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
  
    if(!theme) throw new Error('нельзя воспользовать хуком вне котекста ThemeContext');
  
    return theme;
  }