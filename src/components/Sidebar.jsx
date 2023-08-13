import * as S from '../styles/Sidebar';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/Context';

export default function SideBar() {

    const { theme } = useThemeContext();

    return (
        <S.MainSidebar>
        <S.SidebarPersonal>
            <S.SidebarPersonalName style={{color: theme.colorText}}>Sergey.Ivanov</S.SidebarPersonalName>
            <S.SidebarAvatar />
        </S.SidebarPersonal>
        <S.SidebarBlock>
            <S.SidebarList>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={'/selection/1'}><S.SidebarImg src="img/playlist01.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={'/selection/2'}><S.SidebarImg src="img/playlist02.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={'/selection/3'}><S.SidebarImg src="img/playlist03.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
            </S.SidebarList>
        </S.SidebarBlock>
    </S.MainSidebar>
    )
}