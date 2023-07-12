import * as S from '../styles/Sidebar';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { SELECTIONS } from "../constans";

export default function SideBar() {
    const params = useParams();

    const page = SELECTIONS.find((page) => page.id === Number(params.id));

    return (
        <S.MainSidebar>
        <S.SidebarPersonal>
            <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
            <S.SidebarAvatar />
        </S.SidebarPersonal>
        <S.SidebarBlock>
            <S.SidebarList>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={`/selection/${page.id}`}><S.SidebarImg src="img/playlist01.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={`/selection/${page.id}`}><S.SidebarImg src="img/playlist02.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                    <S.SidebarLink href="#">
                        <Link to={`/selection/${page.id}`}><S.SidebarImg src="img/playlist03.png" alt="day's playlist" /></Link>
                    </S.SidebarLink>
                </S.SidebarItem>
            </S.SidebarList>
        </S.SidebarBlock>
    </S.MainSidebar>
    )
}