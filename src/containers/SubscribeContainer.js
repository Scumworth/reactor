// containers/SubscribeContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Subscribe from './../components/Subscribe';
import { selectSubEmail } from './../actions';
import $ from 'jquery';

class SubscribeContainer extends Component {
    render() {
        return (
            <div>
                <Subscribe 
                    subEmail = { this.props.subEmail }
                    handleChangeSubEmail = { this.props.handleChangeSubEmail }
                    handleSubmitSubEmail = { this.props.handleSubmitSubEmail }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { subscribe } = state;
    const { subEmail } = subscribe;
    return { subEmail }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeSubEmail: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectSubEmail(value));
        },
        handleSubmitSubEmail: (e, subEmail) => {
            e.preventDefault();
            $.post('http://dev3.apppartner.com/Reactors/scripts/add-email.php', {
                email: subEmail
            }, (res) => console.log(res)
            ).fail((res) => console.log(res))
        },
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeContainer);
