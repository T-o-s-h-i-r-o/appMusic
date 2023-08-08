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

    const { theme } = useThemeContext();

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
                <use xlinkHref={theme.colorText === '#FFFFFF' ? 'img/icon/sprite.svg#icon-search' : 'img/icon/sprite.svg#icon-search-dark'} />
            </S.SearchSvg>
            <S.SearchText style={{color: theme.colorText}} type="search" placeholder="Поиск" name="search" />
        </S.CenterblockSearch>
        <S.CenterblockH2 style={{color: theme.colorText}}>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
            <S.FilterTitle style={{color: theme.colorText}}>Искать по:</S.FilterTitle>

            <S.ButtonAuthor style={{color: theme.colorText}} isActive={visibleFilter === "author"} onClick={() => toggleVisibleFilter('author')}>исполнителю</S.ButtonAuthor>
            {visibleFilter === "author" && (blockFilterAuthor())}
            
            <S.ButtonYear style={{color: theme.colorText}} isActive={visibleFilter === "year"} onClick={() => toggleVisibleFilter("year")}>году выпуска</S.ButtonYear>
            {visibleFilter === "year" && <div style={{color: theme.colorText}}>Я фильтр по году</div>}
            <S.ButtonGenre style={{color: theme.colorText}} isActive={visibleFilter === "genre"} onClick={() => toggleVisibleFilter("genre")}>жанру</S.ButtonGenre>
            {visibleFilter === "genre" && <div style={{color: theme.colorText}}>Я фильтр по жанру</div>}
        </S.CenterblockFilter>
        <S.CenterblockContent>
            <S.ContentTitle>
                <S.Col01 style={{color: theme.colorTextCenterBlock}}>Трек</S.Col01>
                <S.Col02 style={{color: theme.colorTextCenterBlock}}>ИСПОЛНИТЕЛЬ</S.Col02>
                <S.Col03 style={{color: theme.colorTextCenterBlock}}>АЛЬБОМ</S.Col03>
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
                                    {/* <use xlinkHref="img/icon/sprite.svg#icon-note"></use> */}
                                    <use xlinkHref={theme.colorText === '#FFFFFF' ? "img/icon/sprite.svg#icon-note" : "img/icon/sprite.svg#icon-note-dark"} />
                                </S.TrackTitleSvg>
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Guilt <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Nero</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Welcome Reality</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>4:44</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Elektro <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Elektro</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>2:22</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>I’m Fire <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Ali Bakgor</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>I’m Fire</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>2:22</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Non Stop <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}}>(Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Стоункат, Psychopath</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Non Stop</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>4:12</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Run Run <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}}>(feat. AR/CO)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Jaded, Will Clarke, AR/CO</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Run Run</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>2:54</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Eyes on Fire <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}}>(Zeds Dead Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Eyes on Fire</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>5:20</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Mucho Bien <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}}>(Hi Profile Remix)</S.TrackTitleSpan></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Mucho Bien</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>3:41</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Knives n Cherries <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>minthaze</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Captivating</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>1:48</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>How Deep Is Your Love <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Calvin Harris, Disciples</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>How Deep Is Your Love</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>3:32</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}>Morena <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}>Tom Boxer</S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}>Soundz Made in Romania</S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}}>3:36</S.TrackTimeText>
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
                                <S.TrackTitleLink href="http://" style={{color: theme.colorText}}> <S.TrackTitleSpan style={{color: theme.colorTextCenterBlock}} /></S.TrackTitleLink>
                            </S.TrackTitleText>
                        </S.TrackTitle>
                        <S.TrackAuthor>
                            <S.TrackAuthorLink href="http://" style={{color: theme.colorText}}></S.TrackAuthorLink>
                        </S.TrackAuthor>
                        <S.TrackAlbum>
                            <S.TrackAlbumLink href="http://" style={{color: theme.colorTextCenterBlock}}></S.TrackAlbumLink>
                        </S.TrackAlbum>
                        <S.TrackTime>
                            <S.TrackTimeSvg alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </S.TrackTimeSvg>
                            <S.TrackTimeText style={{color: theme.colorTextCenterBlock}} />
                        </S.TrackTime>
                    </S.PlaylistTrack>
                </S.PlaylistItem>
            </S.ContentPlaylist>    
        }
        </S.CenterblockContent>
        </S.MainCenterblock>
    )
}