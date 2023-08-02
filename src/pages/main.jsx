import Nav from '../components/Nav';
import CenterBlock from '../components/CenterBlock';
import SideBar from '../components/Sidebar';
import Bar from '../components/Bar';
import { ThemeContext } from 'styled-components';
import { useState } from 'react';
import { themes } from '../context/Context';

export const Main = () => {

    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
      if (currentTheme === themes.dark) {
        setCurrentTheme(themes.light);
        return;
      }
  
      setCurrentTheme(themes.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <Nav />
        <CenterBlock />
        <SideBar />
        <Bar />
        </ThemeContext.Provider>
    )
}