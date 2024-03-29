import * as S from './styles/App';
import GlobalStyles from './styles/Global'
import { AppRoutes } from './routes';
import { useThemeContext, ThemeContext, themes } from '../src/context/Context';
import { useState } from 'react';

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);

    const toggleTheme = () => {
      if (currentTheme === themes.light) {
        setCurrentTheme(themes.dark);
        return;
      }
  
      setCurrentTheme(themes.light);
    };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
    <GlobalStyles />
    <S.Wrapper>
        <S.Container style={{background: currentTheme.backgroundApp}}>
            <S.Main>
                <AppRoutes />
            </S.Main>
        </S.Container>
    </S.Wrapper>
    </ThemeContext.Provider>
)
}

export default App;