import { useState} from 'react';
import * as S from '../styles/Nav';
import { Link } from "react-router-dom";
import { useThemeContext } from '../context/Context';

export default function Nav() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const { toggleTheme } = useThemeContext();
    const { theme } = useThemeContext();

    function blockNavMenu() {
        return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem><Link to="/"><S.MenuLink style={{color: theme.colorText}}>Главное</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem><Link to="/selection/4"><S.MenuLink style={{color: theme.colorText}}>Мой плейлист</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem><Link to="/login"><S.MenuLink style={{color: theme.colorText}}>Выйти</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem onClick={toggleTheme}><S.DarkLigthTheme alt="color theme">
                    <use xlinkHref={theme.colorText === '#FFFFFF' ? 'img/icon/sprite.svg#icon-dark' : 'img/icon/sprite.svg#icon-light'} />
                    </S.DarkLigthTheme></S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )
    }

    return (
        <S.MainNav style={{background: theme.backgroundNav}}>
            <S.NavLogo><Link to="/">
                <S.LogoImage src={theme.colorText === '#FFFFFF' ? 'img/logo.png' : 'img/logoDark.png'} alt="logo" />
            </Link></S.NavLogo>
            <S.NavBurger onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <S.BurgerLine style={{background: theme.backgroundBurger}} />
                <S.BurgerLine style={{background: theme.backgroundBurger}} />
                <S.BurgerLine style={{background: theme.backgroundBurger}} />
            </S.NavBurger>
            {isOpenMenu && ( blockNavMenu())}
        </S.MainNav>
)
}
