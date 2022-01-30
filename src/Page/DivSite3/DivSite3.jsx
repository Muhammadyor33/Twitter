import './DivSite3.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Strelca } from '../../Components/Lib/strelca';
import { Points } from '../../Components/Lib/Points';
import { Comments } from '../../Components/Lib/comment';
import { NewPost } from '../../Components/Lib/newpost';
import { Like } from '../../Components/Lib/like';
import { Posts } from '../../Components/Lib/post';
import { Static } from '../../Components/Lib/statistic';
import Post_Style_Logo from '../../Assets/Svg/newpost2.svg'
import { LikeColor } from '../../Components/Lib/like2'
import { Location } from '../../Components/Lib/location';
import { Scripca } from '../../Components/Lib/scripca';
import { Balloon } from '../../Components/Lib/balloon';
import { Calendar } from '../../Components/Lib/calendar';
import { Nina } from '../../Components/Lib/nina';
import Profile_image from '../../Assets/Images/profile_img.png'

import { data } from '../../Localization/data';
import { Themes } from '../../Localization/Themes';
import { Themes2 } from '../../Localization/Themes2';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

const DivSite3 = function() {

    const {contexts, setContexts} = React.useContext(Context)
    const {theme, setTheme} = React.useContext(ContextThemes)

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
    }

    return (
        
        <>
            <div className='div_site_box'>
                <div className='div_site_header_box div_site_box_border'>
                    <div className='div_site_image_s'>
                        <a onClick={() => navigate(-1)} href="#">
                            <Strelca color={Themes[theme].darkColor}/>
                        </a>
                        <div className='div_site_h5p'>
                            <h5 className={`${theme === 'light' ? 'div_site_box_bobur_text' : 'div_site_box_bobur_textw'}`}>
                                {'Profile'}
                            </h5>
                            <p className={`${theme === 'light' ? 'div_site_box_bobur_title' : 'div_site_box_bobur_titlew'}`}>
                                {data[contexts].div_site2.tweets2}
                            </p>
                        </div>
                    </div>
                    <div>
                        <FormControl sx={{width: 70, marginRight: 5}} value={contexts} onChange={(evt) => setContexts(evt.target.value)}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Location
                        </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value='uz'>
                                    {data[contexts].uzb}
                                </option>
                                <option value='ru'>
                                    {data[contexts].rus}
                                </option>
                                <option value='en'>
                                    {data[contexts].eng}
                                </option>
                        </NativeSelect>
                        </FormControl>
                        <FormControl sx={{width: 100, marginRight: 10}} value={theme} onChange={(evt) => setTheme(evt.target.value)}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Theme
                        </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value='light'>
                                    {data[contexts].light}
                                </option>
                                <option value='dark'>
                                    {data[contexts].dark}
                                </option>
                        </NativeSelect>
                        </FormControl>
                    </div>
                </div>
                <div className='div_site_box_ii'>
                    <img className='div_site_box_ii_big_image' src={Profile_image} alt={'Profile' + 's avatar'} width={867} height={280}/>
                </div>
                <div>
                    <img className='div_site_box_ii_image' src={Profile_image} alt="Profiles avatar" width={150} height={150}/>
                </div>
                <div className='div_site_main_box div_site_box_border'>
                    <div className='div_site_main_box_imagess'>
                        <Button sx={{marginBottom: 2, marginLeft: 89, marginTop: 2}} variant='contained' color='error' onClick={logOut}>
                            {data[contexts].div_site2.logout}
                        </Button>
                    </div>
                    <div className='div_site_box_h4apa'>
                        <h4 className={`${theme === 'light' ? 'div_site_box_h4apa_h4' : 'div_site_box_h4apa_h4w'}`}>
                            Profile
                        </h4>
                        <a className={`${theme === 'light' ? 'div_site_box_h4apa_link' : 'div_site_box_h4apa_linkw'}`} href="#">
                            Profile @email
                        </a>
                        <div className='div_site_box_h4apa_box'>
                            <a className={`${theme === 'light' ? 'div_site_box_h4apa_box_link1' : 'div_site_box_h4apa_box_link1w'}`} href="#">
                                UX&UI designer at
                            </a>
                            <a className={`${theme === 'light' ? 'div_site_box_h4apa_box_link2' : 'div_site_box_h4apa_box_link2w'}`} href="#">
                                Profile @email
                            </a>
                        </div>
                        <div>
                            <ul className='div_site_logo_list'>
                                <li className='div_site_logo_item'>
                                    <a className='div_site_logo_link' href="#">
                                        <Location color={Themes2[theme].darkColors}/>
                                    </a>
                                    <a className={`${theme === 'light' ? 'div_site_logo_link_text' : 'div_site_logo_link_textw'}`} href="#">
                                        {data[contexts].div_site2.mashag}
                                    </a>
                                </li>
                                <li className='div_site_logo_item'>
                                    <a className='div_site_logo_link' href="#">
                                        <Scripca color={Themes2[theme].darkColors}/>
                                    </a>
                                    <a className={`${theme === 'light' ? 'div_site_logo_link_text_' : 'div_site_logo_link_text_w'}`} href="#">
                                        Profile@email
                                    </a>
                                </li>
                                <li className='div_site_logo_item'>
                                    <a className='div_site_logo_link' href="#">
                                        <Balloon color={Themes2[theme].darkColors}/>
                                    </a>
                                    <a className={`${theme === 'light' ? 'div_site_logo_link_text' : 'div_site_logo_link_textw'}`} href="#">
                                        {data[contexts].div_site2.tugkun}
                                    </a>
                                </li>
                                <li className='div_site_logo_item'>
                                    <a className='div_site_logo_link' href="#">
                                        <Calendar color={Themes2[theme].darkColors}/>
                                    </a>
                                    <p className={`${theme === 'light' ? 'div_site_logo_link_text' : 'div_site_logo_link_textw'}`} href="#">
                                        {data[contexts].div_site2.jonmay}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='div_site2_follow_box'>
                            <div className='div_site2_follow_box_box'>
                                <strong className={`${theme === 'light' ? 'div_site2_follow_strong' : 'div_site2_follow_strongw'}`}>
                                    67
                                </strong>
                                <p className={`${theme === 'light' ? 'div_site_logo_link_text' : 'div_site_logo_link_textw'}`}>
                                    {data[contexts].div_site2.following}
                                </p>
                            </div>
                            <div className='div_site2_follow_box_box'>
                                <strong className={`${theme === 'light' ? 'div_site2_follow_strong' : 'div_site2_follow_strongw'}`}>
                                    47
                                </strong>
                                <p className={`${theme === 'light' ? 'div_site_logo_link_text' : 'div_site_logo_link_textw'}`}>
                                    {data[contexts].div_site2.following}
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul className='div_site_page_text_list'>
                                <li className='div_site_page_text_item'>
                                    <h5 className={`${theme === 'light' ? 'div_site_page_text_h5a' : 'div_site_page_text_h5aw'}`}>
                                        Tweets
                                    </h5>
                                </li>
                                <li className='div_site_page_text_item'>
                                    <h5 className={`${theme === 'light' ? 'div_site_page_text_h5' : 'div_site_page_text_h5w'}`}>
                                        Tweets & replies
                                    </h5>
                                </li>
                                <li className='div_site_page_text_item'>
                                    <h5 className={`${theme === 'light' ? 'div_site_page_text_h5' : 'div_site_page_text_h5w'}`}>
                                        Media
                                    </h5>
                                </li>
                                <li className='div_site_page_text_item'>
                                    <h5 className={`${theme === 'light' ? 'div_site_page_text_h5' : 'div_site_page_text_h5w'}`}>
                                        Likes
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='div_site_span'></div>
                </div>
                <div className='div_site_main_section div_site_box_border'>
                        <div className='div_site_nina_box'>
                            <a href="#">
                                <Nina color={Themes2[theme].darkColors}/>
                            </a>
                            <p className={`${theme === 'light' ? 'div_site_nina_box_nina_text' : 'div_site_nina_box_nina_textw'}`}>
                                Pinned Tweet
                            </p>
                        </div>
                    <div className='div_site_main_section_box'>
                        <a className='div_site_main_section_link' href="#">
                            <img className='div_site_main_section_link_image' src={Profile_image} alt={'Profile' + 's avatar'} width={60} height={60}/>
                        </a>
                        <div className='div_site_main_section_box_text_box'> 
                            <div className='div_site_main_section_box_texts'>
                                <div className='div_site_main_section_box_text'>
                                    <h5 className={`${theme === 'light' ? 'div_site_main_section_box_text_title' : 'div_site_main_section_box_text_titlew'}`}>
                                        Profile
                                    </h5>
                                    <a className={`${theme === 'light' ? 'div_site_main_section_link_text' : 'div_site_main_section_link_textw'}`} href="#">
                                        Profile @email
                                    </a>
                                </div>
                                <a className='div_site_main_section_link' href="#">
                                    <Points color={Themes[theme].darkColor}/>
                                </a>
                            </div>
                            <p className={`${theme === 'light' ? 'div_site_main_section_box_text_heading_lh' : 'div_site_main_section_box_text_heading_lhw'}`}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repudiandae in culpa ad facilis ducimus odit reprehenderit unde, modi eaque!
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className='div_site_main_section_box_two_list'>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Comments color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    10
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <NewPost color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    1
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Like color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    8
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Posts color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Static color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='div_site_main_section div_site_box_border'>
                    <div className='div_site_main_section_box'>
                        <a className='div_site_main_section_link_lh' href="#">
                            <img className='div_site_main_section_link_imagea' src={Profile_image} alt={'Profile' + 's avatar'} width={60} height={60}/>
                        </a>
                        <div className='div_site_main_section_box_text_box'> 
                            <div className='div_site_main_section_box_texts_lh'>
                                <div className='div_site_main_section_box_text'>
                                    <h5 className={`${theme === 'light' ? 'div_site_main_section_box_text_title' : 'div_site_main_section_box_text_titlew'}`}>
                                        Profile
                                    </h5>
                                    <a className={`${theme === 'light' ? 'div_site_main_section_link_text' : 'div_site_main_section_link_textw'}`} href="#">
                                        Profile @email
                                    </a>
                                </div>
                                <a className='div_site_main_section_link' href="#">
                                    <Points color={Themes[theme].darkColor}/>
                                </a>
                            </div>
                            <p className={`${theme === 'light' ? 'div_site_main_section_box_text_heading_lha' : 'div_site_main_section_box_text_heading_lhaw'}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis facere fugiat neque at dolorem sed possimus cupiditate maiores minus rerum atque, reiciendis doloremque excepturi. Ea eveniet blanditiis natus iste expedita quas totam quo nesciunt!
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className='div_site_main_section_box_two_list'>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Comments color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <img src={Post_Style_Logo} alt="post_logo" width={20} height={20}/>
                                </a>
                                <p className='div_site_main_section_box_two_text_style'>
                                    1
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <LikeColor width={20} height={20}/>
                                </a>
                                <p className='div_site_main_section_box_two_text_style_2'>
                                    8
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Posts color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Static color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='div_site_main_section div_site_box_border'>
                    <div className='div_site_main_section_box'>
                        <a className='div_site_main_section_link' href="#">
                            <img className='div_site_main_section_link_imageee' src={Profile_image} alt={'Profile' + 's avatar'} width={60} height={60}/>
                        </a>
                        <div className='div_site_main_section_box_text_box'> 
                            <div className='div_site_main_section_box_texts'>
                                <div className='div_site_main_section_box_text'>
                                    <h5 className={`${theme === 'light' ? 'div_site_main_section_box_text_title' : 'div_site_main_section_box_text_titlew'}`}>
                                        Profile
                                    </h5>
                                    <a className={`${theme === 'light' ? 'div_site_main_section_link_text' : 'div_site_main_section_link_textw'}`} href="#">
                                        Profile @email
                                    </a>
                                </div>
                                <a className='div_site_main_section_link' href="#">
                                    <Points color={Themes[theme].darkColor}/>
                                </a>
                            </div>
                            <p className={`${theme === 'light' ? 'div_site_main_section_box_text_headinga' : 'div_site_main_section_box_text_headingaw'}`}>
                                Lorem ipsum dolor sit.
                            </p>
                            <img className='image_big' src={Profile_image} alt={'Profile' + 's avatar'} width={679} height={453}/>
                        </div>
                    </div>
                    <div>
                        <ul className='div_site_main_section_box_two_list'>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Comments color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    10
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <NewPost color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    1
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Like color={Themes2[theme].darkColors}/>
                                </a>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_two_text' : 'div_site_main_section_box_two_textw'}`}>
                                    8
                                </p>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Posts color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                            <li className='div_site_main_section_box_two_item'>
                                <a href="#">
                                    <Static color={Themes2[theme].darkColors}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
            
    );  
}
export {DivSite3};