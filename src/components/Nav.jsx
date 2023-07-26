import { useState} from 'react';
import * as S from '../styles/Nav';
import { Link } from "react-router-dom";

export default function Nav() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [changeColor, setChangeColor] = useState('dark');

    function changeColorTheme() {
        if (changeColor === 'dark') {
            return setChangeColor('light');
        }
        if (changeColor === 'light') {
            return setChangeColor('dark');
        }
    }

    function blockNavMenu() {
        return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem><Link to="/"><S.MenuLink>Главное</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem><Link to="/selection/4"><S.MenuLink>Мой плейлист</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem><Link to="/login"><S.MenuLink>Выйти</S.MenuLink></Link></S.MenuItem>
                <S.MenuItem><S.DarkLigthTheme alt="color theme"><use onClick={changeColorTheme} xlinkHref='img/icon/sprite.svg#icon-dark' /></S.DarkLigthTheme></S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )
    }

    return (
        <S.MainNav>
            <S.NavLogo>
                <Link to="/"><S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage></Link>
            </S.NavLogo>
            <S.NavBurger onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <S.BurgerLine />
                <S.BurgerLine />
                <S.BurgerLine />
            </S.NavBurger>
            {isOpenMenu && ( blockNavMenu())}
        </S.MainNav>
)
}
