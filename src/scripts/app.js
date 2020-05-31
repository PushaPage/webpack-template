import ID from 'generator-unique-id';
// import SymbolSprite from './components/SymbolSprite';
import MultiSelect from './components/MultiSelect';
import Inputmask from 'inputmask';
import Nav from './components/Nav';
import DigitInput from './components/DigitInput';
import Popups from './components/Popups';
import Resize from './components/Resize';
// import json from '../assets/json.json';

// Inject symbol sprite
// SymbolSprite.inject('./../images/symbol-sprite/symbol-sprite.html', 24);

Inputmask({
    mask: '99/99/9999',
    showMaskOnHover: false,
    // oncomplete(opt) {
    //     console.log(opt);
    // },
    // onKeyValidation(key, res) {
    //     console.log(`${key}: ${JSON.stringify(res)}`);
    // },
    // isComplete(buffer, opts) {
    //     console.log(buffer, opts);
    // },
}).mask(document.getElementById('mask'));

if (document.querySelectorAll('.multiselect').length) {
    [...document.querySelectorAll('.multiselect')].forEach((select, i, arr) => {
        select.reset();
        select.style.setProperty('--z-index', arr.length - i);
        select.id = ID();
        MultiSelect.init(select.id);
    });
}

// digit input init
DigitInput.init();

// Navigation init
Nav.init();

{
    const popups = document.querySelectorAll('.popup');

    if (popups.length) {
        Popups.init(popups);
    }
}

// Resize function
Resize.init();
