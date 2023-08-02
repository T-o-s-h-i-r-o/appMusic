import React, {useContext} from "react";

export const themes = {
    light: {
      // color: '#282c34',
      // background: "#fff",

      background: 'red',
    },
    dark: {
      // color: '#fff',
      // background: "#282c34",

      background: '#1C1C1C',
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });
  
  
  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
  
    if(!theme) return theme.dark;
  
    return theme;
  }