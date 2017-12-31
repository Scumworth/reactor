// components/Subscribe.js

import React from 'react';
import styles from './Subscribe.css.js';
import { Row, FormControl } from 'react-bootstrap';

const Subscribe = ( { handleChangeSubEmail, handleSubmitSubEmail, subEmail }) => (
    <div style = { styles.subscribeContainer }>
        <Row>
            <h2 style = { styles.titleContainer }>
                SUBSCRIBE TO NEWSLETTER
            </h2>
            <div style = { styles.formContainer }>
                <form style = { styles.form }>
                    <FormControl
                        type = "text"
                        placeholder = "Your Email"
                        style = { styles.input }
                        onChange = { handleChangeSubEmail }
                    />
                    <button 
                        style = { styles.button }
                        onClick = { (e) => handleSubmitSubEmail(e, subEmail) }
                    >
                        Subscribe
                    </button>
                </form>
            </div>

        </Row>
    </div>
);

export default Subscribe;
