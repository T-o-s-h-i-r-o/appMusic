import React from 'react';
import * as S from '../styles/Bar';

const Skeleton = () => (
<S.TrackPlayContainSkeleton>
    <S.TrackPlayImageSkeleton />
    <S.TrackPlayFormAASkeleton>
        <S.TrackPlayAuthorSkeleton />
        <S.TrackPlayAlbumSkeleton />
    </S.TrackPlayFormAASkeleton>
</S.TrackPlayContainSkeleton>
)

export default function Bar() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);

    return (
        <S.Bar>
        <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
                <S.BarPlayer>
                    <S.PlayerControls>
                        <S.PlayerBtnPrev>
                            <S.PlayerBtnPrevSvg alt="prev">
                                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                            </S.PlayerBtnPrevSvg>
                        </S.PlayerBtnPrev>
                        <S.PlayerBtnPlay>
                            <S.PlayerBtnPlaySvg alt="play">
                                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                            </S.PlayerBtnPlaySvg>
                        </S.PlayerBtnPlay>
                        <S.PlayerBtnNext>
                            <S.PlayerBtnNextSvg alt="next">
                                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                            </S.PlayerBtnNextSvg>
                        </S.PlayerBtnNext>
                        <S.PlayerBtnRepeat>
                            <S.PlayerBtnRepeatSvg alt="repeat">
                                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                            </S.PlayerBtnRepeatSvg>
                        </S.PlayerBtnRepeat>
                        <S.PlayerBtnShuffle>
                            <S.PlayerBtnShuffletSvg alt="shuffle">
                                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                            </S.PlayerBtnShuffletSvg>
                        </S.PlayerBtnShuffle>
                    </S.PlayerControls>
                    
                    <S.PlayerTrackPlay>
                        {loading ? <Skeleton /> : 
                        <S.TrackPlayContain>
                            <S.TrackPlayImage>
                                <S.TrackPlaySvg alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </S.TrackPlaySvg>
                            </S.TrackPlayImage>
                        
                            <S.TrackPlayAuthor>
                                <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
                            </S.TrackPlayAuthor>
                        
                            <S.TrackPlayAlbum>
                                <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                            </S.TrackPlayAlbum>
                        </S.TrackPlayContain>
                        }

                        <S.TrackPlayLikeDis>
                            <S.TrackPlayLike>
                                <S.TrackPlayLikeSvg alt="like">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </S.TrackPlayLikeSvg>
                            </S.TrackPlayLike>
                            <S.TrackPlayDislike>
                                <S.TrackPlayDislikeSvg alt="dislike">
                                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                </S.TrackPlayDislikeSvg>
                            </S.TrackPlayDislike>
                        </S.TrackPlayLikeDis>
                    </S.PlayerTrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>
                   <S.VolumeContent>
                        <S.VolumeImage>
                            <S.VolumeSvg alt="volume">
                                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                            </S.VolumeSvg>
                        </S.VolumeImage>
                        <S.VolumeProgress>
                            <S.VolumeProgressLine type="range" name="range" />
                        </S.VolumeProgress>
                   </S.VolumeContent>
                </S.BarVolumeBlock>
            </S.BarPlayerBlock>
        </S.BarContent>
    </S.Bar>
    )
}