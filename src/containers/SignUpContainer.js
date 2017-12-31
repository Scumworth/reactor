// containers/SignUpContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './../components/SignUp';
import { selectSignUpEmail, selectSignUpPassword, selectSignUpUsername } from './../actions';
import $ from 'jquery';


class SignUpContainer extends Component {
    render() {
        return (
            <div>
                <SignUp 
                    handleClick = { this.props.handleClick } 
                    handleChangeSignUpEmail = { this.props.handleChangeSignUpEmail }
                    handleChangeSignUpPassword = { this.props.handleChangeSignUpPassword }
                    handleChangeSignUpUsername = { this.props.handleChangeSignUpUsername }
                    signUpEmail = { this.props.signUpEmail }
                    signUpPassword = { this.props.signUpPassword }
                    signUpUsername = { this.props.signUpUsername }
                    handleSubmitSignUp = { this.props.handleSubmitSignUp }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { signUp } = state;
    const { signUpEmail, signUpPassword, signUpUsername } = signUp;
    return { signUpEmail, signUpPassword, signUpUsername };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeSignUpEmail: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectSignUpEmail(value));
        },
        handleChangeSignUpPassword: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectSignUpPassword(value));
        },
        handleChangeSignUpUsername: (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            dispatch(selectSignUpUsername(value));
        },
        handleSubmitSignUp: (e, signUpUsername, signUpPassword, signUpEmail) => {
            e.preventDefault();
            $.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', {
                username: signUpUsername,
                password: signUpPassword,
                email: signUpEmail
            }, (res) => console.log(res)
            ).fail((res) => console.log(res))
        },
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
