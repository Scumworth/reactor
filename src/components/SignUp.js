// components/SignUp.js

import React from 'react';
import styles from './SignUp.css.js';
import { Row, Col, FormControl } from 'react-bootstrap';

const SignUp = ( { handleClick, handleChangeSignUpEmail, handleChangeSignUpPassword, 
    handleChangeSignUpUsername, signUpEmail, signUpPassword, signUpUsername, handleSubmitSignUp }) => (
    <div style = { styles.wholePage }>
        <Row style = { styles.navBar}>
            <Col xs = { 3 }>
                <div style = { styles.navItemContainer }
                >
                    <span 
                        style = { styles.navItem }
                        onClick = { (e) => handleClick(e, '/') }
                    >
                        Reactor
                    </span>
                </div>
            </Col>
        </Row>
        <Row style = { styles.signUpContainer }>
            <Col xs = { 4 }></Col>
            <Col xs = { 4 }>
                <Row style = { styles.navTabs }>
                    <Col xs = { 6 }>
                        <div style = { styles.navTabActive }>SIGN UP</div>
                    </Col>
                    <Col xs = { 6 }>
                        <span
                            style = { styles.navTabPassive }
                            onClick = { (e) => handleClick(e, '/login')}
                        >
                            LOG IN
                        </span>
                    </Col>
                </Row>
                <Row style = { styles.formContainer }>
                    <div>
                            <FormControl
                                style = { styles.usernameInput }
                                type = "text"
                                placeholder = "Username"
                                onChange = { handleChangeSignUpUsername }
                            />
                            <FormControl
                                style = { styles.emailInput }
                                type = "text"
                                placeholder = "Email"
                                onChange = { handleChangeSignUpEmail }
                            />
                            <FormControl
                                style = { styles.pwInput }
                                type = "password"
                                placeholder = "Password"
                                onChange = { handleChangeSignUpPassword }
                            />
                            <button
                                style = { styles.button }
                                onClick = { (e) => handleSubmitSignUp(e, signUpUsername, signUpPassword, signUpEmail) }
                            >
                                Sign Up
                            </button>
                    </div>
                </Row>
            </Col>
            <Col xs = { 4 }></Col>
        </Row>
    </div>
);

export default SignUp;
