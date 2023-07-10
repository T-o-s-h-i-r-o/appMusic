import * as S from './styles/App';
import GlobalStyles from './styles/Global'
import { AppRoutes } from './routes';

function App() {
  return (
    <>
    <GlobalStyles />
    <S.Wrapper>
        <S.Container>
            <S.Main>
                <AppRoutes />
            </S.Main>
        </S.Container>
    </S.Wrapper>
    </>
)
}

export default App;