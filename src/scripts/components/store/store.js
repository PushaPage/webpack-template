import * as rus from '@components/languages/rus.json';
import * as en from '@components/languages/en.json';

/* eslint-disable no-unused-vars */
let rerenderEntireTree;

export let content = rus.default;

export const langSwitch = lang => {
    lang === 'en' ? (content = en.default) : (content = rus.default);
    rerenderEntireTree(content);
};

export const result = () => 'hello!';
export const subscribe = observer => {
    rerenderEntireTree = observer;
};
