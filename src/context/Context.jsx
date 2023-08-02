export const themes = {
    light: {
      color: '#282c34',
      background: "#fff",
    },
    dark: {
      color: '#fff',
      // background: "#282c34",
      background: 'red',
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