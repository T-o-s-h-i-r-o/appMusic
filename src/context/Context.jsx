import React, {useContext} from "react";

export const themes = {
    light: {
      backgroundApp: '#FFFFFF',

      backgroundBurger: '#000000',
      backgroundNav: '#F6F5F3',
      colorText: '#000000',

      colorTextCenterBlock: '#B1B1B1',
      buttonSelectActive: '',
      buttonSelectHover: '',
    },
    dark: {
      backgroundApp: '#181818',

      backgroundBurger: '#D3D3D3',
      backgroundNav: '#1C1C1C',
      colorText: '#FFFFFF',

      colorTextCenterBlock: '#4E4E4E',
      buttonSelectActive: 'AD61FF',
      buttonSelectHover: 'D9B6FF',
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