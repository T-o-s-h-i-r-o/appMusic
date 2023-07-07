import Nav from './components/Nav';
import CenterBlock from './components/CenterBlock';
import SideBar from './components/Sidebar';
import Bar from './components/Bar';
import * as S from './styles/App';
import GlobalStyles from './styles/Global'

function App() {
  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
        <S.Container>
            <S.Main>
                <Nav />
                <CenterBlock />
                <SideBar />
                <Bar />
            </S.Main>
        </S.Container>
    </S.Wrapper>
    </>
)
}

export default App;