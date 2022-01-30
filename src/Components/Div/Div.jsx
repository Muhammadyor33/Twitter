import './Div.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom' 

import { DivLoginBox } from '../DivLoginBox/DivLoginBox'
import { DivFullBox } from '../DivFullBox/DivFullBox';

function Div() {
    
    return (
        
        <>
            <div>
                <Routes>
                    <Route path='login/*' element={<DivLoginBox/>}/>
                    <Route path='/*' element={<DivFullBox/>}/>
                </Routes>
            </div>
        </>
            
    );
};
export {Div};