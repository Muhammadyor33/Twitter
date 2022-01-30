import './DivFollow.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Search_Logo from '../../Assets/Svg/input.svg'
import Settings_Logo from '../../Assets/Svg/settings.svg'
import Points_Logo from '../../Assets/Svg/points.svg'
import { data } from '../../Localization/data';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

function DivFollow() {

    const {contexts} = React.useContext(Context)
    const {theme} = React.useContext(ContextThemes)

    const [users, setUsers] = React.useState([])

    React.useEffect(() => {

        (async () => {
            try {
                const response = await fetch('https://reqres.in/api/users')
                const data = await response.json()
                console.log(data.data)

                if (data?.data?.length > 0) {
                    setUsers([...data.data])
                }
            } catch (err) {
                console.log(err)
            }
        })()

    },[])
    
    return (
        
        <>

            <div className='div_follow_boxx'>
                <div>
                    <input className='div_follow_input' type="text" name="follows_input" placeholder={data[contexts].div_follow.input.placeholder.Search_Twitter}/>
                    <img className='div_follow_search_image' src={Search_Logo} alt="search_logo" width={19} height={19}/>
                </div>
                <div className='div_follow_box'>
                    <div className='div_follow_ts_box'>
                        <h3 className='div_follow_title'>
                            {data[contexts].div_follow.Trends_for_you}
                        </h3>
                        <a className='div_follow_link' href="#Link">
                            <img className='div_follow_image' src={Settings_Logo} alt="settings_logo" width={24} height={24}/>
                        </a>
                    </div>
                    <div>
                        <ul className='div_follow_list'>
                            <li className='div_follow_item'>
                                <div className='div_follow_item_box'>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Trendin_in_Germany}
                                    </p>
                                    <h4 className='div_follow_heading'>
                                        Revolution
                                    </h4>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Tweets}
                                    </p>
                                </div>
                                <a className='div_follow_link' href="#Link">
                                    <img className='div_follow_image' src={Points_Logo} alt="points_logo" width={17} height={4}/>
                                </a>
                            </li>
                            <li className='div_follow_item'>
                                <div className='div_follow_item_box'>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Trendin_in_Germany}
                                    </p>
                                    <h4 className='div_follow_heading'>
                                        Revolution
                                    </h4>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Tweets}
                                    </p>
                                </div>
                                <a className='div_follow_link' href="#Link">
                                    <img className='div_follow_image' src={Points_Logo} alt="points_logo" width={17} height={4}/>
                                </a>
                            </li>
                            <li className='div_follow_item'>
                                <div className='div_follow_item_box'>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Trendin_in_Germany}
                                    </p>
                                    <h4 className='div_follow_heading'>
                                        Revolution
                                    </h4>
                                    <p className='div_follow_text'>
                                        {data[contexts].div_follow.ul1.Tweets}
                                    </p>
                                </div>
                                <a className='div_follow_link' href="#Link">
                                    <img className='div_follow_image' src={Points_Logo} alt="points_logo" width={17} height={4}/>
                                </a>
                            </li>
                        </ul>
                        <a className='div_follow_text_link' href="#Link">
                            {data[contexts].div_follow.Show_more}
                        </a>
                    </div>
                </div>
                <div className='div_follow_followers_box'>
                    <h3 className='div_follow_followers_title'>
                        {data[contexts].div_follow.You_might_like}
                    </h3>
                        {
                            users.length > 0 && 
                            users.map((user) => (
                                <ul key={user.id} className='div_follow_followers_list'>
                                    <li  className='div_follow_followers_item'>
                                        <NavLink  to={'profile/' + user.id} className='div_follow_followers_link'>
                                            <img className='div_follow_followers_image' src={user.avatar} alt="Shuhratbek_photo" width={60} height={60}/>
                                        </NavLink>
                                        <div className='div_follow_followers_box_mrs'>
                                            <div className='div_follow_box_h5a'>
                                                <NavLink to={'profile/' + user.id}>
                                                    <h5 className='div_follow_followers_box_text'>
                                                        {user.first_name}
                                                    </h5>
                                                </NavLink>
                                                <a className='div_follow_followers_text_link' href="#Link">
                                                    <p>
                                                        {user.email}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='div_follow_followers_button'>
                                                {data[contexts].div_follow.ul.Follow}
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                    <a className='div_follow_text_link' href="#Link">
                        {data[contexts].div_follow.Show_more}
                    </a>
                </div>
                <div>
                    <div className='div_follow_link_box'>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.Terms_of_Service}
                        </a>
                        <a className={`${theme === 'light' ? 'div_follow_links--active' : 'div_follow_links--activew'}`} href="#Link">
                            {data[contexts].div_follow.Privacy_Policy}
                        </a>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.Cookie_Policy}
                        </a>
                    </div>
                    <div>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.Imprint}
                        </a>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.More}
                        </a>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.Ads_Info}
                        </a>
                        <a className={`${theme === 'light' ? 'div_follow_links' : 'div_follow_linksw'}`} href="#Link">
                            {data[contexts].div_follow.Twitter}
                        </a>
                    </div>
                </div>
            </div>
            
        </>
            
    );
};
export {DivFollow};