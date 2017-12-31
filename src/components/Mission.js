/// components/Mission.js

import React from 'react';
import styles from './Mission.css.js';
import { Row, Col } from 'react-bootstrap';

const Mission = () => (
    <div>
        <Row style = { styles.missionContainer }>
            <Col xs = { 6 }>
                <h2 style = { styles.titleContainer }>WHAT WE DO</h2>
            </Col>
            <Col xs = { 6 }>
                <div style = { styles.statementContainer }>
                    <h5 style = { styles.headerFive }>
                        We do
                    </h5>
                    <p style = { styles.paragraph }>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV as quiz prog. Junk MTV quiz graced by fox whelps. Bawds job, flick quartz, vex nymphs.
                    </p>
                </div>
            </Col>
        </Row>
    </div>
);

export default Mission;

