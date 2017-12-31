// components/Features.js

import React from 'react';
import styles from './Features.css.js';
import { Row, Col, Media } from 'react-bootstrap';
import img1 from './../images/1.png';
import img2 from './../images/2.png';

const Features = () => (
    <div>
        <Row style = { styles.featuresContainer }>
            <Col xs = { 6 } style = { styles.featureOne }>
                <Media>
                    <Media.Left>
                        <img style = { styles.image } src = { img1 } alt = "img1"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading style = { styles.headerFive }>
                            Regional Cuising Down Home Southern Cooking
                        </Media.Heading>
                        <p style = { styles.paragraph }>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nympths.
                        </p>
                    </Media.Body>
                </Media>
            </Col>
            <Col xs = { 6 } style = { styles.featureTwo }>
                <Media>
                    <Media.Left>
                        <img style = { styles.image } src = { img2 } alt = "img2"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading style = { styles.headerFive }>
                            Pos Hardware More Options in Less Space
                        </Media.Heading>
                        <p style = { styles.paragraph }>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                        </p>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    </div>
);

export default Features;
