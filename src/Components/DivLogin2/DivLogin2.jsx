import './DivLogin2.css';
import React from 'react';
import { Context as AuthenContext } from '../../Context/Authentication';

import Twitter_Logo from '../../Assets/Svg/twitter_logo.svg'
import { data } from '../../Localization/data';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const DivLogin2 = function() {
    
    const {contexts, setContexts} = React.useContext(Context)
    const {theme, setTheme} = React.useContext(ContextThemes)

    const {setToken} = React.useContext(AuthenContext)

    const handleSubmit = evt => {
        evt.preventDefault()
        
        const {user_email, user_password} = evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify ({
                email: user_email.value.trim(),
                password: user_password.value.trim(),
            }),
        })
        .then(response => response.json())
        .then(data => setToken(data?.token))
    }
    
    return (
        
        <>
            <div>
                <a href="#Link">
                    <img className='login_box_image' src={Twitter_Logo} alt="twitter_logo" width={40} height={33}/>
                </a>
                <div className='login_box_iss'>
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
                        <FormControl sx={{width: 100}} value={theme} onChange={(evt) => setTheme(evt.target.value)}>
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
                <div>
                    <h1 className={`${theme === 'light'? 'login_h11' : 'login_h11w'}`}>
                        {data[contexts].div_login.loginh122}
                    </h1>
                    <form onSubmit={handleSubmit}>
                    <input className={`${theme === 'light'? 'login_inputt' : 'login_inputtw'}`} defaultValue='eve.holt@reqres.in' type="email" name='user_email' placeholder={data[contexts].div_login.inputpl12}/>
                    <input className={`${theme === 'light'? 'login_inputt' : 'login_inputtw'}`} defaultValue='cityslicka' type="password" name='user_password' placeholder={data[contexts].div_login.inputpl22}/>
                    <div className='login_link_boxx'>
                        <a className={`${theme === 'light'? 'login_linkk' : 'login_linkkw'}`} href="#Link">
                            {data[contexts].div_login.link12}
                        </a>
                    </div>
                    <strong className={`${theme === 'light'? 'login_link_boxx_strong' : 'login_link_boxx_strongw'}`}>
                        {data[contexts].div_login.loginstrong2}
                    </strong>
                    <p className={`${theme === 'light'? 'login_link_boxx_text' : 'login_link_boxx_textw'}`}>
                        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                    </p>
                    <div>
                        <select className={`${theme === 'light'? 'login_link_boxx_select' : 'login_link_boxx_selectw'}`}>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="january">
                                January
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="february">
                                February
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="march">
                                March
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="april">
                                April
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="may">
                                May
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="june">
                                June
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="july">
                                July
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="august">
                                August
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="september">
                                September
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="october">
                                October
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="november">
                                November
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option' : 'login_link_boxx_optionw'}`} value="december">
                                December
                            </option>
                        </select>
                        <select className={`${theme === 'light'? 'login_link_boxx_select2' : 'login_link_boxx_select2w'}`}>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="monday">
                                Monday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="tuesday">
                                Tuesday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="wednesday">
                                Wednesday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="thursday">
                                Thursday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="friday">
                                Friday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="sunday">
                                Sunday
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="saturday">
                                Saturday
                            </option>
                        </select>
                        <select className={`${theme === 'light'? 'login_link_boxx_select2' : 'login_link_boxx_select2w'}`}>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2000">
                                2000
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2001">
                                2001
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2002">
                                2002
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2003">
                                2003
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2004">
                                2004
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2005">
                                2005
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2006">
                                2006
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2007">
                                2007
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2008">
                                2008
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2009">
                                2009
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2010">
                                2010
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2011">
                                2011
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2012">
                                2012
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2013">
                                2013
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2014">
                                2014
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2015">
                                2015
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2016">
                                2016
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2017">
                                2017
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2018">
                                2018
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2019">
                                2019
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2020">
                                2020
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2021">
                                2021
                            </option>
                            <option className={`${theme === 'light'? 'login_link_boxx_option2' : 'login_link_boxx_option2w'}`} value="2022">
                                2022
                            </option>
                        </select>
                    </div>
                    <button className={`${theme === 'light' ? 'login_btnn' : 'login_btnnw'}`}>
                        {data[contexts].div_login.btn2}
                    </button>
                    </form>
                </div>
            </div>
        </>
        
    );
};
export {DivLogin2};