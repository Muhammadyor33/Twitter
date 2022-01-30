import './DivFullBox.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom' 

import { DivPage } from '../DivPage/DivPage'
import { DivPage2 } from '../../Page/DivPage2/DivPage2'
import { DivSite } from '../DivSite/DivSite'
import { DivSite2 } from '../../Page/DivSite2/DivSite2'
import { DivSite3 } from '../../Page/DivSite3/DivSite3'
import { DivFollow } from '../DivFollow/DivFollow'
import { DivFollow2 } from '../../Page/DivFollow2/DivFollow2'

import { Context as ContextThemes } from '../../Context/Themes';

const DivFullBox = function() {

    const {theme} = React.useContext(ContextThemes)

    return (
        <div className={`${theme === 'light' ? 'div_full_box' : 'div_full_box_2'}`}>
            <Routes>
                <Route path='/*' element={
                    <div className={`${theme === 'light' ? 'div_full_box_page' : 'div_full_box_page2'}`}>
                        <DivPage/>
                    </div>
                }/>
                <Route path='profile/:id' element={
                    <div className={`${theme === 'light' ? 'div_full_box_page' : 'div_full_box_page2'}`}>
                        <DivPage2/>
                    </div>
                }/>
                <Route path='profilee' element={
                    <div className={`${theme === 'light' ? 'div_full_box_page' : 'div_full_box_page2'}`}>
                        <DivPage2/>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path='/*' element={
                    <div className={`${theme === 'light' ? 'div_full_box_site' : 'div_full_box_site2'}`}>
                        <DivSite/>
                    </div>
                }/>
                <Route path='profile/:id' element={
                    <div className={`${theme === 'light' ? 'div_full_box_site' : 'div_full_box_site2'}`}>
                        <DivSite2/>
                    </div>
                }/>
                <Route path='profilee' element={
                    <div className={`${theme === 'light' ? 'div_full_box_site' : 'div_full_box_site2'}`}>
                        <DivSite3/>
                    </div>
                }/>
            </Routes>
            <Routes>
                <Route path='/*' element={
                    <div className={`${theme === 'light' ? 'div_full_box_follow' : 'div_full_box_follow2'}`}>
                        <DivFollow/>
                    </div>
                }/>
                <Route path='profile/:id' element={
                    <div className={`${theme === 'light' ? 'div_full_box_follow' : 'div_full_box_follow2'}`}>
                        <DivFollow2/>
                    </div>
                }/>
                <Route path='profilee' element={
                    <div className={`${theme === 'light' ? 'div_full_box_follow' : 'div_full_box_follow2'}`}>
                        <DivFollow2/>
                    </div>
                }/>
            </Routes>
        </div>
    )
}
export { DivFullBox }