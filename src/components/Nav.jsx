import { useState} from 'react';

export default function Nav() {
    const [nav__menu, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setMenuClass("visible");
        } else {
            setMenuClass("hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
    <nav className="main__nav nav">
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div className="nav__burger burger" onClick={updateMenu}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
        <div className={nav__menu}>
            <ul className="menu__list">
                <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
            </ul>
        </div>
    </nav>
)
}