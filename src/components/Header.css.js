// components/Header.css.js

import banner from './../images/banner.png';

export default {
    banner: {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '600px',
    },
    headerOne: {
        color: '#ffffff',
        fontSize: '50px',
        fontWeight: '700',
        letterSpacing: '0.6px',
        fontFamily: 'Roboto, sans-serif',
    },
    navBar: {
        textAlign: 'center'
    },
    headerContainer: {
        textAlign: 'center',
        marginTop: '225px'
    },
    navItem: {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '700',
        fontFamily: 'Roboto, sans-serif',
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: '10px'
    }
}
