import './DivSite.css';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom'

import Profile_image from '../../Assets/Images/profile_img.png'
import { Star } from '../Lib/star';
import { Image } from '../Lib/image';
import { Gif } from '../Lib/gif';
import { Result } from '../Lib/result';
import { Smile } from '../Lib/smile';
import { Cloock } from '../Lib/cloock';
import { Points } from '../Lib/Points';
import { Comments } from '../Lib/comment';
import { Posts } from '../Lib/post';
import { Static } from '../Lib/statistic';
import Post_Style_Logo from '../../Assets/Svg/newpost2.svg'
import { LikeColor } from '../Lib/like2'
import Loading from '../../Assets/Svg/loading.svg'

import { data } from '../../Localization/data';
import { Themes } from '../../Localization/Themes';
import { Themes2 } from '../../Localization/Themes2';
import { Themes3 } from '../../Localization/Themes3';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';

const DivSite = function() {

    const [users, setUsers] = React.useState([])
    const [input, setInput] = React.useState([])
    
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {

        (async () => {
            try {
                const response = await fetch('https://reqres.in/api/users')
                const data = await response.json()

                if (data?.data?.length > 0) {
                    setUsers([...data.data])
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        })()
        
    },[])

    const {contexts, setContexts} = React.useContext(Context)
    const {theme, setTheme} = React.useContext(ContextThemes)

    const id = input.length

    const handleDelete = (evt) => {
        const {inputId} = evt.target.dataset;

        const foundInputId =  Number(inputId);

        const filteredInputs = input.filter(inputs => inputs.id !== foundInputId);

        setInput([...filteredInputs]);
    }

    const addUsers = evt => {
        if(evt.code === 'Enter') {
            const newInput = {
                id: input.length
            }
            setInput([newInput, ...input])
            const newUsers = (
                    <div key={id}>
                    <div className='div_site_box_border div_site_main_section'>
                        <div className='div_site_main_section_box'>
                            <NavLink className='div_site_main_section_link_lh' to={'/profilee/'}>
                                <img className='div_site_main_section_link_image' src={Profile_image} alt={"Profile" + "s avatar"} width={60} height={60}/>
                            </NavLink>
                            <div className='div_site_main_section_box_text_box'> 
                                <div className='div_site_main_section_box_texts_lh'>
                                    <div className='div_site_main_section_box_text'>
                                        <NavLink to={'/profilee/'}>
                                            <h5 className={`${theme === 'light' ? 'div_site_main_section_box_text_title' : 'div_site_main_section_box_text_titlew'}`}>
                                                {evt.target.value}
                                            </h5>
                                        </NavLink>
                                        <a className={`${theme === 'light' ? 'div_site_main_section_link_text' : 'div_site_main_section_link_textw'}`} href="#">
                                            {'@' + evt.target.value}
                                        </a>
                                    </div>
                                    <a className='div_site_main_section_link' href="#">
                                        <Points color={Themes[theme].darkColor}/>
                                    </a>
                                </div>
                                <p className={`${theme === 'light' ? 'div_site_main_section_box_text_heading_lh' : 'div_site_main_section_box_text_heading_lhw'}`}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate corporis odit iste alias. Fugit.
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
                                        <LikeColor alt="like_logo" width={20} height={20}/>
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
                                <li className='div_site_main_section_box_two_item'>
                                    <Button sx={{margin: 0, padding: 0, padding: 1, marginLeft: 2}} variant='contained' color='error' data-todo-id={id} onClick={handleDelete}>
                                        {data[contexts].div_site.deletee}
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
            )
            
            setInput([newUsers, ...input])
            evt.target.value = null
        }
    }

    return (
        
        <>
            <div className='div_site_box'>
                <div className='div_site_header_box div_site_box_border'>
                    <h2 className={`${theme === 'light' ? 'div_site_header_title' : 'div_site_header_titlew'}`}>
                        {data[contexts].div_page.nav.Home}
                    </h2>
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
                        <button className='div_site_button'>
                            <Star color={Themes[theme].darkColor}/>                          
                        </button>
                    </div>
                </div>
                <div className='div_site_main_box div_site_box_border'>
                    <div className='div_site_main_box_boxx'>
                        <a href="#">
                            <img className='div_site_main_box_image' src={Profile_image} alt="Profile_image" width={60} height={60}/>
                        </a>
                        <input className={`${theme === 'light' ? 'div_site_main_box_input' : 'div_site_main_box_inputw'}`} type="text" placeholder={data[contexts].div_site.input.placeholder.Whats_happening} onKeyUp={addUsers}/>
                    </div>
                    <div className='div_site_main_box_images'>
                        <ul className='div_site_main_box_images_list'>
                            <li className='div_site_main_box_images_item'>
                                <a className='div_site_main_box_images_link' href="#">
                                    <Image color={Themes3[theme].blue}/>
                                </a>
                            </li>
                            <li className='div_site_main_box_images_item'>
                                <a className='div_site_main_box_images_link' href="#">
                                    <Gif color={Themes3[theme].blue}/>
                                </a>
                            </li>
                            <li className='div_site_main_box_images_item'>
                                <a className='div_site_main_box_images_link' href="#">
                                    <Result color={Themes3[theme].blue}/>
                                </a>
                            </li>
                            <li className='div_site_main_box_images_item'>
                                <a className='div_site_main_box_images_link' href="#">
                                    <Smile color={Themes3[theme].blue}/>
                                </a>
                            </li>
                            <li className='div_site_main_box_images_item'>
                                <a className='div_site_main_box_images_link' href="#">
                                    <Cloock color={Themes3[theme].blue}/>
                                </a>
                            </li>
                        </ul>
                        <button className={`${theme === 'light' ? 'div_site_main_box_images_btn' : 'div_site_main_box_images_btnw'}`}>
                            {data[contexts].div_page.button.Tweet}
                        </button>
                    </div>
                </div>
                {loading && <img className="image_loading" src={Loading} alt="loading"/>}
                <h1>
                    {input}
                </h1>
                {
                    users.length > 0 && 
                        users.map((user) => (
                            <div key={user.id} >
                                <div className='dsms'>
                                <div className='div_site_box_border div_site_main_section'>
                                <div className='div_site_main_section_box'>
                                    <NavLink className='div_site_main_section_link_lh' to={'profile/' + user.id}>
                                        <img className='div_site_main_section_link_image' src={user.avatar} alt={user.first_name + "s avatar"} width={60} height={60}/>
                                    </NavLink>
                                    <div className='div_site_main_section_box_text_box'> 
                                        <div className='div_site_main_section_box_texts_lh'>
                                            <div className='div_site_main_section_box_text'>
                                                <NavLink to={'profile/' + user.id}>
                                                    <h5 className={`${theme === 'light' ? 'div_site_main_section_box_text_title' : 'div_site_main_section_box_text_titlew'}`}>
                                                        {user.first_name + " " + user.last_name}
                                                    </h5>
                                                </NavLink>
                                                <a className={`${theme === 'light' ? 'div_site_main_section_link_text' : 'div_site_main_section_link_textw'}`} href="#">
                                                    {user.email}
                                                </a>
                                            </div>
                                            <a className='div_site_main_section_link' href="#">
                                                <Points color={Themes[theme].darkColor}/>
                                            </a>
                                        </div>
                                        <p className={`${theme === 'light' ? 'div_site_main_section_box_text_heading_lh' : 'div_site_main_section_box_text_heading_lhw'}`}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis labore fugit molestias est, accusamus quas.
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
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
            
    );
}
export {DivSite};