import React, {useState} from 'react';

const Skeleton = () => (
    <div className="content__playlist playlist">
                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track playlist__track_skeleton track">
                        <div className="track__title_skeleton">
                            <div className="track__title-image_skeleton skeleton"></div>
                            <div className="track__title-text_skeleton skeleton"></div>
                        </div>
                        <div className="track__author_skeleton skeleton"></div>
                        <div className="track__album_skeleton skeleton"></div>
                    </div>
                </div> 
            </div>  
)

export default function CenterBlock() {
    const [isOpenFilterAuthor, setIsOpenFilterAuthor] = useState(false);
    const [loading, setLoading] = React.useState(true);

    // const [isActiveOption, setIsActiveOption] = useState(false);

    // function blockFilterAuthor() {
    //         const arrAuthors = ['Nero', 'Dynoro, Outwork, Mr. Gee', 'Ali Bakgor', 'Стоункат, Psychopath', 'Jaded, Will Clarke, AR/CO', 'Blue Foundation, Zeds Dead', 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', 'minthaze', 'Calvin Harris, Disciples', 'Tom Boxer'];
    //         const total = arrAuthors.reduce((result, author) => {
    //             return result + author
    //         })
    //     console.log(total);
    //     }


    // function blockFilterAuthor() {
    //     return (
    //     <div className='filter__author'>
    //         <select className='filter__author_select' name="select" size="5" multiple>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s1" onClick={() => setIsActiveOption(!isActiveOption)}>Nero</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s2" onClick={() => setIsActiveOption(!isActiveOption)}>Dynoro, Outwork, Mr. Gee</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s3" onClick={() => setIsActiveOption(!isActiveOption)}>Ali Bakgor</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s4" onClick={() => setIsActiveOption(!isActiveOption)}>Стоункат, Psychopath</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s5" onClick={() => setIsActiveOption(!isActiveOption)}>Jaded, Will Clarke, AR/CO</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s1" onClick={() => setIsActiveOption(!isActiveOption)}>Blue Foundation, Zeds Dead</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s2" onClick={() => setIsActiveOption(!isActiveOption)}>HYBIT, Mr. Black, Offer Nissim, Hi Profile</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s3" onClick={() => setIsActiveOption(!isActiveOption)}>minthaze</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s4" onClick={() => setIsActiveOption(!isActiveOption)}>Calvin Harris, Disciples</option>
    //             <option className={`filter__author_option ${isActiveOption && 'filter__author_option-active'}`} value="s5" onClick={() => setIsActiveOption(!isActiveOption)}>Tom Boxer</option>
    //         </select>
    //     </div>
    //     )
    // }


////////////////////////////////////////////////////////////////////
    function blockFilterAuthor() {
        return (
        <div className='filter__author'>
            <div className='filter__author_select'>
                <input id="singleSelect1" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect1" className="filter__author_label">Nero</label>
                <input id="singleSelect2" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect2" className="filter__author_label">Dynoro, Outwork, Mr. Gee</label>
                <input id="singleSelect3" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect3" className="filter__author_label">Ali Bakgor</label>
                <input id="singleSelect4" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect4" className="filter__author_label">Стоункат, Psychopath</label>
                <input id="singleSelect5" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect5" className="filter__author_label">Jaded, Will Clarke, AR/CO</label>
                <input id="singleSelect6" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect6" className="filter__author_label">Blue Foundation, Zeds Dead</label>
                <input id="singleSelect7" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect7" className="filter__author_label">HYBIT, Mr. Black, Offer Nissim, Hi Profile</label>
                <input id="singleSelect8" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect8" className="filter__author_label">minthaze</label>
                <input id="singleSelect9" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect9" className="filter__author_label">Calvin Harris, Disciples</label>
                <input id="singleSelect10" className="filter__author_input" type="checkbox" name="singleSelect" />
                <label htmlFor="singleSelect10" className="filter__author_label">Tom Boxer</label>
            </div>
        </div>
        )
    }
////////////////////////////////////////////////////////////////////

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);
     


    return (
        <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className='filter__button button-author _btn-text' onClick={() => setIsOpenFilterAuthor(!isOpenFilterAuthor)}>исполнителю</div>
            <div className="filter__button button-year _btn-text" onClick={() => setIsOpenFilterAuthor(false)}>году выпуска</div>
            <div className="filter__button button-genre _btn-text" onClick={() => setIsOpenFilterAuthor(false)}>жанру</div>
        </div>
        {isOpenFilterAuthor && ( blockFilterAuthor())}
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>

        {loading ? <Skeleton /> : 
            <div className="content__playlist playlist">
                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Guilt <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Nero</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Welcome Reality</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">4:44</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Elektro <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Elektro</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">2:22</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">I’m Fire <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Ali Bakgor</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">I’m Fire</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">2:22</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Non Stop <span className="track__title-span">(Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Non Stop</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">4:12</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Run Run <span className="track__title-span">(feat. AR/CO)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Jaded, Will Clarke, AR/CO</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Run Run</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">2:54</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Eyes on Fire <span className="track__title-span">(Zeds Dead Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Blue Foundation, Zeds Dead</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Eyes on Fire</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">5:20</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Mucho Bien <span className="track__title-span">(Hi Profile Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Mucho Bien</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">3:41</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Knives n Cherries <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">minthaze</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Captivating</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">1:48</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">How Deep Is Your Love <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Calvin Harris, Disciples</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">How Deep Is Your Love</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">3:32</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Morena <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Tom Boxer</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Soundz Made in Romania</a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text">3:36</span>
                        </div>
                    </div>
                </div>

                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <svg className="track__title-svg" alt="music">
                                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                </svg>
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://"> <span className="track__title-span"></span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://"></a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://"></a>
                        </div>
                        <div className="track__time">
                            <svg className="track__time-svg" alt="time">
                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                            </svg>
                            <span className="track__time-text"></span>
                        </div>
                    </div>
                </div>
            </div>    
        }
        </div>
        </div>
    )
}