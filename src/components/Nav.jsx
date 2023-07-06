import { useState} from 'react';
import * as S from '../styles/Nav';

export default function Nav() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function blockNavMenu() {
        return (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem><S.MenuLink href="http://">Главное</S.MenuLink></S.MenuItem>
                <S.MenuItem><S.MenuLink href="http://">Мой плейлист</S.MenuLink></S.MenuItem>
                <S.MenuItem><S.MenuLink href="http://">Войти</S.MenuLink></S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )
    }

    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage>
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