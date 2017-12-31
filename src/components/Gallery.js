// components/Gallery.js

import React from 'react';
import styles from './Gallery.css.js';
import { Row, Col } from 'react-bootstrap';
import img3 from './../images/3.png';
import img4 from './../images/4.png';
import img5 from './../images/5.png';
import img6 from './../images/6.png';

const Gallery = () => (
    <div style = { styles.componentContainer }>
        <Row style = { styles.headerContainer }>
            <h3 style = { styles.headerThree }>Maui By Air The Best Way Around The Island</h3>
        </Row>
        <Row>
            <div style = { styles.galleryContainer }>
            <Col xs = { 3 } style = { styles.column }>
                <img src = { img3 } style = { styles.image } alt = "image3"/>
                <h5 style = { styles.headerFive }>East Josianefurt</h5>
                <p style = { styles.caption }>085 Daron Via</p>
            </Col>
            <Col xs = { 3 } style = { styles.column }>
                <img src = { img4 } style = { styles.image } alt = "image4"/>
                <h5 style = { styles.headerFive }>South Cristopherport</h5>
                <p style = { styles.caption }>162 Chandler Ville</p>
            </Col>
            <Col xs = { 3 } style = { styles.column }>
                <img src = { img5 } style = { styles.image } alt = "image5"/>
                <h5 style = { styles.headerFive }>Concepcionbury</h5>
                <p style = { styles.caption }>7643 Kylie Burgs</p>
            </Col>
            <Col xs = { 3 } style = { styles.column }>
                <img src = { img6 } style = { styles.image } alt = "image6"/>
                <h5 style = { styles.headerFive }>Reychester</h5>
                <p style = { styles.caption }>5590 Gabe Views Apt. 044</p>
            </Col>
            </div>
        </Row>
    </div>
);

export default Gallery;
