import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './css/header-bar.css'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <svg className="flag" xmls="http://w3.org/2000/svg" width="100" height="66">
                    <rect width="100" height="66" fill="#ED2939"></rect>
                    <rect width="66" height="66" fill="#fff"></rect>
                    <rect width="33" height="66" fill="#002395"></rect>
                </svg>
                <div className="title-name">
                    <h1>Lingua Franca</h1>
                </div>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
