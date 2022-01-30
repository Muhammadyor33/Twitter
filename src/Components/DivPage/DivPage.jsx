import './DivPage.css';
import React from 'react';
import Twitter_Logo from '../../Assets/Svg/twitter_logo.svg'
import { Home } from '../Lib/Home';
import { Explore } from '../Lib/Explore';
import Notifications from '../Lib/Notification';
import { Message } from '../Lib/Messages';
import { Bookmark } from '../Lib/Bookmarks';
import { List } from '../Lib/Lists';
import { Profile } from '../Lib/Profile';
import { More } from '../Lib/More';

import { data } from '../../Localization/data';
import { Themes } from '../../Localization/Themes';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

const DivPage = function() {       
    
    const {contexts} = React.useContext(Context)
    const {theme} = React.useContext(ContextThemes)
    
    return (
        
        <>
            <div className='div_page_box'>
                <img className='div_page_logo' src={Twitter_Logo} alt="twitter_logo" width={40} height={33}/>
                <nav className='div_page_nav'>
                    <ul className='div_page_list'>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Home color={Themes[theme].darkColor}/>
                            </a>
                            <strong className={`${theme === 'light' ? 'div_page_strong' : 'div_page_strongw'}`}>
                                {data[contexts].div_page.nav.Home}
                            </strong>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Explore color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Explore}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Notifications color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Notifications}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Message color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Messages}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Bookmark color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Bookmarks}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <List color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Lists}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
                                <Profile color={Themes[theme].darkColor}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_page_text' : 'div_page_textw'}`}>
                                {data[contexts].div_page.nav.Profile}
                            </p>
                        </li>
                        <li className='div_page_item'>
                            <a className='div_page_link' href="#Link">
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
export {DivPage};