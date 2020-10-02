// import * as $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import SymbolSprite from '@components/UI/SymbolSprite';
import { subscribe, content, langSwitch } from '@components/store/store';
import Popups from '@components/UI/Popups';
import Resize from '@helpers/Resize';
import App from './components/app/App.jsx';

// import json from '@assets/json.json';
const rerenderEntireTree = content => {
    ReactDOM.render(<App content={content} langSwitch={langSwitch} />, document.getElementById('root'));
};

rerenderEntireTree(content);

subscribe(rerenderEntireTree);

// Init symbol sprite
SymbolSprite.init('./../images/symbol-sprite/symbol-sprite.html', 24);

// Popups
{
    const popups = document.querySelectorAll('.popup');
    if (popups.length) {
        Popups.init(popups);
    }
}

// Resize function
Resize.init();
