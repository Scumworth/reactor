// containers/LoginContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './../components/Login';
import { selectLoginEmail, selectLoginPassword } from './../actions';
import $ from 'jquery';

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <Login 
                    handleClick = { this.props.handleClick } 
                    handleChangeLoginEmail = { this.props.handleChangeLoginEmail }
                    handleChangeLoginPassword = { this.props.handleChangeLoginPassword }
                    loginEmail = { this.props.loginEmail }
                    loginPassword = { this.props.loginPassword }
                    handleSubmitLogin = { this.props.handleSubmitLogin }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { login } = state;
    const { loginEmail, loginPassword } = login;
    return { loginEmail, loginPassword };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLoginEmail: (e) => {
            e.preventDefault(e);
            const target = e.target;
            const value = target.value;
            dispatch(selectLoginEmail(value));
        },
        handleChangeLoginPassword: (e) => {
            e.preventDefault(e);
            const target = e.target;
            const value = target.value;
            dispatch(selectLoginPassword(value));
        },
        handleSubmitLogin: (e, loginEmail, loginPassword) => {
            e.preventDefault();
            $.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', {
                email: loginEmail,
                password: loginPassword
            }, (res) => console.log(res)
            ).fail((res) => console.log(res))
        },
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

