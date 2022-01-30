import './DivLoginBox.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { DivLogin } from '../DivLogin/DivLogin'
import { DivLogin2 } from '../DivLogin2/DivLogin2'

import { Context as ContextThemes } from '../../Context/Themes';

const DivLoginBox = function() {

    const {theme} = React.useContext(ContextThemes)

    return (
        <>
            
            <Routes>
                <Route path='login/*' element={
                    <div className={`${theme === 'light' ? 'div_login_box' : 'div_login_box_2'}`}>
                        <DivLogin/>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path='login2/*' element={
                    <div className={`${theme === 'light' ? 'div_login_boxx' : 'div_login_boxx_2'}`}>
                        <DivLogin2/>
                    </div>
                }/>
            </Routes>
        </>
    )
}
export { DivLoginBox }