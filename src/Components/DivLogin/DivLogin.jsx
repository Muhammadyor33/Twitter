import './DivLogin.css';
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Context as AuthenContext } from '../../Context/Authentication';

import Twitter_Logo from '../../Assets/Svg/twitter_logo.svg'
import { data } from '../../Localization/data';
import { Context } from '../../Context/Localization';
import { Context as ContextThemes } from '../../Context/Themes';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const DivLogin = function() {
    
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
                <div className='login_box_is'>
                    <a href="#Link">
                        <img src={Twitter_Logo} alt="twitter_logo" width={50} height={41}/>
                    </a>
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
                    <h1 className={`${theme === 'light'? 'login_h1' : 'login_h1w'}`}>
                        {data[contexts].div_login.loginh1}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input className={`${theme === 'light'? 'login_input' : 'login_inputw'}`} defaultValue='eve.holt@reqres.in' type="email" name='user_email' placeholder={data[contexts].div_login.inputpl1}/>
                        <input className={`${theme === 'light'? 'login_input' : 'login_inputw'}`} defaultValue='cityslicka' type="password" name='user_password' placeholder={data[contexts].div_login.inputpl2}/>
                    <button className={`${theme === 'light' ? 'login_btn' : 'login_btnw'}`}>
                        {data[contexts].div_login.btn}
                    </button>
                    </form>
                </div>
                <div className='login_link_box'>
                    <a className={`${theme === 'light'? 'login_link' : 'login_linkw'}`} href="#Link">
                        {data[contexts].div_login.link1}
                    </a>
                    <NavLink to={'/login2'} className={`${theme === 'light'? 'login_link' : 'login_linkw'}`}>
                        {data[contexts].div_login.link2}
                    </NavLink>
                </div>
            </div>
        </>
        
    );
};
export {DivLogin};