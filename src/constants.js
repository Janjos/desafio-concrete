
// Styles

export const COLORS = {
    PRIMARY: '#ac53f2',
    SECONDARY: '#5c5c5c',
    WHITE: 'white',
    SHADOW: 'rgba(0, 0, 0, 0.4)'
};

export const LOGO_SIZES = {
    SMALL: 'small',
    BIG: 'big'
}

export const FONTS = {
    TITLE: 'monaco, monospace',
    TEXT: 'Raleway, sans-serif'
}

export const LAYOUT = {
    COLUMN: {
        LEFT: '20vw',
        RIGHT: '65vw'
    }
}

export const MEDIA_QUERY = {
    MOBILE: '425px',
    TABLET: '840px',
    DESKTOP: '1800px'
}

// API
export const GITHUB_API = 'https://api.github.com';
export const GITHUB_API_USERS = `${GITHUB_API}/users`;

// Routes
export const ROUTES = {
    HOME: '/',
    RESULT: {
        PATH: '/user',
        PARAMETER: '/:username',
        URL: '/user/:username'
    },
    NOTFOUND : '/notfound'
}