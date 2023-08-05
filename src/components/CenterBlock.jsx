import React, {useState} from 'react';
import * as S from '../styles/CenterBlock';
import { useThemeContext } from '../context/Context';

const Skeleton = () => (
    <S.ContentPlaylist>
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
               
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
                
                <S.PlaylistItem>
                    <S.PlaylistTrackSkeleton>
                        <S.TrackTitleSkeleton>
                            <S.TrackTitleImageSkeleton />
                            <S.TrackTitleTextSkeleton />
                        </S.TrackTitleSkeleton>
                        <S.TrackAuthorSkeleton />
                        <S.TrackAlbumSkeleton />
                    </S.PlaylistTrackSkeleton>
                </S.PlaylistItem>
    </S.ContentPlaylist>  
)

export default function CenterBlock() {
    const [visibleFilter, setVisibleFilter] = useState(null);
    const [loading, setLoading] = React.useState(true);

    const toggleVisibleFilter = (filter) => {
        setVisibleFilter(visibleFilter === filter ? null : filter);
      };

    function blockFilterAuthor() {
        return (
        <S.FilterAuthor>
            <S.FilterAuthorSelect>
                <S.FilterAuthorInput id="singleSelect1" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect1">Nero</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect2" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect2">Dynoro, Outwork, Mr. Gee</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect3" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect3">Ali Bakgor</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect4" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect4">Стоункат, Psychopath</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect5" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect5">Jaded, Will Clarke, AR/CO</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect6" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect6">Blue Foundation, Zeds Dead</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect7" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect7">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect8" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect8">minthaze</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect9" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect9">Calvin Harris, Disciples</S.FilterAuthorLabel>
                <S.FilterAuthorInput id="singleSelect10" type="checkbox" name="singleSelect" />
                <S.FilterAuthorLabel htmlFor="singleSelect10">Tom Boxer</S.FilterAuthorLabel>
            </S.FilterAuthorSelect>
        </S.FilterAuthor>
        )
    }

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);
     


    return (
        <S.MainCenterblock>
        <S.CenterblockSearch>
            <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.ButtonAuthor isActive={visibleFilter === "author"} onClick={() => toggleVisibleFilter('author')}>исполнителю</S.ButtonAuthor>
            {visibleFilter === "author" && (blockFilterAuthor())}
            <S.ButtonYear isActive={visibleFilter === "year"} onClick={() => toggleVisibleFilter("year")}>году выпуска</S.ButtonYear>
            {visibleFilter === "year" && <div>Я фильтр по году</div>}
            <S.ButtonGenre isActive={visibleFilter === "genre"} onClick={() => toggleVisibleFilter("genre")}>жанру</S.ButtonGenre>
            {visibleFilter === "genre" && <div>Я фильтр по жанру</div>}
        </S.CenterblockFilter>
        <S.CenterblockContent>
            <S.ContentTitle>
                <S.Col01>Трек</S.Col01>
                <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                <S.Col03>АЛЬБОМ</S.Col03>
                <S.Col04>
                    <S.PlaylistTitleSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                </S.Col04>
            </S.ContentTitle>

            {loading ? <Skeleton /> : 
            <S.ContentPlaylist>
                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Guilt <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>4:44</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Elektro <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>2:22</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">I’m Fire <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Ali Bakgor</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>2:22</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Non Stop <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Стоункат, Psychopath</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>4:12</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Run Run <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Jaded, Will Clarke, AR/CO</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>2:54</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Eyes on Fire <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Eyes on Fire</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>5:20</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Mucho Bien <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>3:41</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Knives n Cherries <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>1:48</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">How Deep Is Your Love <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Calvin Harris, Disciples</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">How Deep Is Your Love</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>3:32</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://">Morena <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://">Soundz Made in Romania</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText>3:36</S.TrackTimeText>
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>

                <S.PlaylistItem>
                    <S.PlaylistTrack>
                        <S.TrackTitle>
                            <S.TrackTitleImage>
                                <S.TrackTitleSvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://"> <S.TrackTitleSpan /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://"></S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://"></S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText />
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>
            </S.ContentPlaylist>    
        }
        </S.CenterblockContent>
        </S.MainCenterblock>
    )
}