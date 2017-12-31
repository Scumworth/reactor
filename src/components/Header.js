// components/Header.js

import React from 'react';
import styles from './Header.css.js';
import { Row, Col } from 'react-bootstrap';

const Header = ({ handleClick }) => (
    <div style = { styles.banner }>
        <Row style = { styles.navBar }>
            <Col xs = { 3 } >
                <div style = { styles.navItemContainer }>
                    <span
                        style = { styles.navItem }
                        onClick = { (e) => handleClick(e, '/') }
                    >
                        Reactor
                    </span>
                </div>
            </Col>
            <Col xs = { 3 } xsOffset = { 6 }>
                <div 
                    style = { styles.navItem }
                    onClick = { (e) => handleClick(e, '/login') }
                >
                    Log In
                </div>
            </Col>
        </Row>
        <Row style = { styles.headerContainer }>
                <h1 style = { styles.headerOne }>Hello, welcome to Reactor</h1>
        </Row>
    </div>
);

export default Header;
