import styled, { keyframes, css } from 'styled-components';

// =================== Centerblock ====================//

export const MainCenterblock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 50px;
`
export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`
export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    // color: #FFFFFF;

    &::placeholder {
        background-color: transparent;
        // color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`
export const CenterblockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`
export const CenterblockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`
export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`
export const FilterButtonStyles = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 60px;
    padding: 6px 20px;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:hover {
        border-color: ${(props) => (props.isActive ? "#AD61FF" : "#D9B6FF")};
        color: ${(props) => (props.isActive ? "#AD61FF" : "#D9B6FF")};
        cursor: pointer;
    }
`
export const BtnTextStyles = css`
    border: 1px solid ${(props) => (props.isActive ? "#AD61FF" : props.colorTheme)};
    color: ${(props) => (props.isActive ? "#AD61FF" : props.colorTheme)};
    cursor: pointer;
`
export const ButtonAuthor = styled.div`
    ${FilterButtonStyles}
    ${BtnTextStyles}
`
export const ButtonYear = styled.div`
    ${FilterButtonStyles}
    ${BtnTextStyles}
`
export const ButtonGenre = styled.div`
    ${FilterButtonStyles}
    ${BtnTextStyles}
`
export const CenterblockContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`
export const PlaylistTitleCol = css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`
export const Col01 = styled.div`
    ${PlaylistTitleCol}
    width: 447px;
`
export const Col02 = styled.div`
    ${PlaylistTitleCol}
    width: 321px;
`
export const Col03 = styled.div`
    ${PlaylistTitleCol}
    width: 245px;
`
export const Col04 = styled.div`
    ${PlaylistTitleCol}
    width: 60px;
    text-align: end;
`
export const PlaylistTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`



// =================== ContentPlaylist ====================//

export const ContentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TrackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`
export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    // background: #313131; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`
export const TrackTitleText = styled.div`
`
export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`
export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
`
export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`
export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left;
`
export const TrackAlbum = styled.div`
    width: 245px;
`
export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`
export const TrackTime = styled.div`
`
export const TrackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
`
export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`



// =================== Filter Author ====================//

export const FilterAuthor = styled.div`
    display: flex;
    align-items: center;

    width: 248px; // Либо окно можно выставить как min-width
    height: 305px;
    background: #313131;
    border-radius: 12px;
    padding-right: 34px;
    padding-left: 34px;

    position: absolute;
    left: 20%;
    top: 31%;
`
export const FilterAuthorSelect = styled.div`
    display: flex;
    gap: 28px; 
    flex-direction: column;           
    overflow-y: auto;
    height: 237px; 

    &::-webkit-scrollbar {
        border-radius: 10px;
        width: 4px;
        background: #4B4949;
    }

    &::-webkit-scrollbar-thumb {
        background: #FFFFFF;
        border-radius: 10px;
    }
`
export const FilterAuthorInput = styled.input`
    display: none;
            
    &:checked + label {
        text-decoration-line: underline;
        color: #B672FF;
    }
    &:disabled + label {
        opacity: 0.6;
        pointer-events: none;
    }
`
export const FilterAuthorLabel = styled.label`
    display: flex;
    align-items: center;
    transition: all 0.2s ease-out;
    cursor: pointer;
    // font-family: 'StratosSkyeng';
    font-family: 'StratosSkyeng', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
                
    &:hover {
        color: #D9B6FF;
    }
`



// =================== Skeleton ====================//

const SkeletonAnimation = keyframes`
    0% {
        background-color: #313131;
    }
    0% {
        background-color: #3a3a3a;
    }
    50% {
        background-color: #414141;
    }
    0% {
        background-color: #484848;
    }
    100% {
        background-color: #4E4E4E;
    }
`;

export const PlaylistTrackSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const TrackTitleSkeleton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`
export const TrackTitleImageSkeleton = styled.div`
    width: 51px;
    height: 51px;
    background: #313131;
    margin-right: 14px;
    animation: ${SkeletonAnimation} 1.0s infinite;
`
export const TrackTitleTextSkeleton = styled.div`
    width: 433px;
    height: 19px;
    background: #313131;
    animation: ${SkeletonAnimation} 1.0s infinite;
`
export const TrackAuthorSkeleton = styled.div`
    width: 386px;
    height: 19px;
    background: #313131;
    margin-right: 50px;
    animation: ${SkeletonAnimation} 1.0s infinite;
`
export const TrackAlbumSkeleton = styled.div`
    width: 417px;
    height: 19px;
    background: #313131;
    animation: ${SkeletonAnimation} 1.0s infinite;
`
