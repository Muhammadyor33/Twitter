import './DivPage2.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Twitter_Logo from '../../Assets/Svg/twitter_logo.svg'
import { Home2 } from '../../Components/Lib/home2';
import { Explore } from '../../Components/Lib/Explore';
import Notifications from '../../Components/Lib/Notification';
import { Message } from '../../Components/Lib/Messages';
import { Bookmark } from '../../Components/Lib/Bookmarks';
import { List } from '../../Components/Lib/Lists';
import { Profile2 } from '../../Components/Lib/profile2';
import { More } from '../../Components/Lib/More';

import { data } from '../../Localization/data';
import { Themes } from '../../Localization/Themes';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

const DivPage2 = function() {       
    
    const {contexts} = React.useContext(Context)
    const {theme} = React.useContext(ContextThemes)
    const navigate = useNavigate()
    
    return (
        
        <>
            <div className='div_page2_box'>
                <img className='div_page_logo' src={Twitter_Logo} alt="twitter_logo" width={40} height={33}/>
                <nav className='div_page_nav'>
                    <ul className='div_page_list'>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <Home2 color={Themes[theme].darkColor}/>
                            </a>
                            <a onClick={() => navigate(-1)} href='#' className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Home}
                            </a>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                            <Explore color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Explore}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <Notifications color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Notifications}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <Message color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Messages}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <Bookmark color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Bookmarks}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <List color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Lists}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_linkk' href="#">
                                <Profile2 color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_strongg' : 'div_page_stronggw'}`}>
                                {data[contexts].div_page.nav.Profile}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#">
                                <More color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.More}
                            </p>
                        </li>
                    </ul>
                </nav>
                <button className={`${theme === 'light' ? 'div_page_button' : 'div_page_buttonw'}`}>
                    {data[contexts].div_page.button.Tweet}
                </button>
            </div>
        </>
        
    );
};
export {DivPage2};