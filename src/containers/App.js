import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './../components/LandingPage';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import { Grid, Row } from 'react-bootstrap';
import { push } from 'react-router-redux';

class App extends Component {
    render() {
        return (
            <Grid fluid = { true }>
                <Row>
                    <Switch>
                        <Route exact path = "/" 
                            render = { () => <LandingPage handleClick = { this.props.handleClick }/> } 
                        />
                        <Route path = "/login" 
                            render = { () => <LoginContainer handleClick = { this.props.handleClick }/> } />
                        <Route path = "/signup" 
                            render = { () => <SignUpContainer handleClick = { this.props.handleClick }/> } />
                    </Switch>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (e, destination) => {
            e.preventDefault();
            dispatch(push(destination));
        },
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
