// components/SignUp.css.js

import background from './../images/onboarding-bg.png';
import emailIcon from './../images/ic-email.png';
import pwIcon from './../images/ic-password.png';
import usernameIcon from './../images/ic-username.png';

export default {
    wholePage: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        fontFamily: 'Roboto, sans-serif',
        color: '#ffffff'
    },
    navBar: {
        textAlign: 'center'
    },
    navItem: {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '700',
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: '10px'
    },
    signUpContainer: {
        textAlign: 'center',
        marginTop: '300px',
        minWidth: '1000px'
        
    },
    emailInput: {
        backgroundImage: `url(${emailIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25px',
        backgroundPosition: '1.5em 50%',
        paddingLeft: '4.5em',
        height: '50px',
        borderRadius: '25px',
        margin: '20px',
        backgroundColor: 'rgba(30, 54, 86, 0.1)',
        border: 'none',
        color: '#ffffff'
    }, 
    usernameInput: {
        backgroundImage: `url(${usernameIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25px',
        backgroundPosition: '1.5em 50%',
        paddingLeft: '4.5em',
        height: '50px',
        borderRadius: '25px',
        margin: '20px',
        backgroundColor: 'rgba(30, 54, 86, 0.1)',
        border: 'none',
        color: '#ffffff'
    },
    pwInput: {
        backgroundImage: `url(${pwIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25px',
        backgroundPosition: '1.5em 50%',
        paddingLeft: '4.5em',
        height: '50px',
        borderRadius: '25px',
        margin: '20px',
        backgroundColor: 'rgba(30, 54, 86, 0.1)',
        border: 'none',
        color: '#ffffff'
    },
    button: {
        height: '50px',
        borderRadius: '25px',
        width: '100%',
        margin: '20px',
        backgroundColor: '#e43c4b',
        border: 'none'
    },
    navTabs: {
        textAlign: 'left',
        paddingLeft: '15px',
        paddingRight: '15px',
        width: '100%',
        fontSize: '18px',
        fontWeight: '700'
    },
    navTabActive: {
        textDecoration: 'underline'
    },
    navTabPassive: {
        display: 'inline-block',
        opacity: '0.5', 
        cursor: 'pointer'
    },
    formContainer: {
        marginTop: '20px'
    },
    icon: {
        height: '30px'
    }
    
}
