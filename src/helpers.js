const { detect } = require('detect-browser');
const browser = detect();

export const userBrowser = {
    isChrome: browser.name === 'chrome'
};