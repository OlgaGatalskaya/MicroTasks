import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import {Site} from "../site/Site";
import {Map} from "../map/Map";
import {Filter} from "../filter/Filter";
import {ButtonMain} from "../componentsbtn/ButtonMain";
import {HukUseState} from "../hukuseState/HukUseState";
import {InputApp} from "../input/InputApp";


function App() {

    return (

        <div className='App'>
            {/*<Site/>*/}
            {/*<Map/>*/}
            {/*<Filter/>*/}
            {/*<ButtonMain/>*/}
            {/*<HukUseState/>*/}
            <InputApp/>

        </div>
    );
}

export default App
