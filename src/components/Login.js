// components/Login.js

import React from 'react';
import styles from './Login.css.js';
import { Row, Col, FormControl } from 'react-bootstrap';

const Login = ( { handleClick, handleChangeLoginEmail, handleChangeLoginPassword, 
    loginEmail, loginPassword, handleSubmitLogin }) => (
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
        <Row style = { styles.loginContainer }>
            <Col xs = { 4 }></Col>
            <Col xs = { 4 }>
                <Row style = { styles.navTabs }>
                    <Col xs = { 6 }>
                        <span 
                            style = { styles.navTabPassive}
                            onClick = { (e) => handleClick(e, '/signup')}
                        >
                            SIGN UP
                        </span>
                    </Col>
                    <Col xs = { 6 }>
                        <div style = { styles.navTabActive}>LOG IN</div>
                    </Col>
                </Row>
                <Row style = { styles.formContainer }>
                    <div>
                            <FormControl
                                style = { styles.emailInput }
                                type = "text"
                                placeholder = "Email"
                                onChange = { handleChangeLoginEmail }
                            />
                            <FormControl
                                style = { styles.pwInput }
                                type = "password"
                                placeholder = "Password"
                                onChange = { handleChangeLoginPassword }
                            />
                            <button
                                style = { styles.button }
                                onClick = { (e) => handleSubmitLogin(e, loginEmail, loginPassword) }
                            >
                                LOG IN
                            </button>
                    </div>
                </Row>
            </Col>
            <Col xs = { 4 }></Col>
        </Row>
    </div>
);

export default Login;
