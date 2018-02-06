import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the spaced repetition session
    if (props.loggedIn) {
        return <Redirect to="/session" />;
    }

    return (
        <div className="home">
            <h2>Welcome to Foo App</h2>
            <div className="app-description">
                <span>Lorem ipsum dolor sit amet, massa faucibus ex vulputate volutpat, lacus imperdiet ac. Nisl ut, arcu et, magnis cras at, suscipit posuere, leo at. Aliquam risus mus suspendisse aliquam id, laoreet metus mattis amet sed mauris, convallis neque ligula condimentum nulla. Et ullamcorper nunc.</span>
            </div>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
