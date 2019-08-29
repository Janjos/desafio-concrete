const { detect } = require('detect-browser');
const browser = detect();

export const userBrowser = {
    isChrome: browser ? browser.name === 'chrome' : false
};