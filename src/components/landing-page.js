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
            <h2>Welcome to French Flash Cards!</h2>
            <div className="app-description">
                <span className="landing-descrip"><strong>French Flash Cards is an application designed to help English speakers learn basic French vocabulary via Spaced Repetition based exercises.</strong></span>
                <br></br>
                <br></br>
                <span className="landing-descrip">Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays. With spaced repetition, we stay ahead of that moment of forgetting, but we do it in a smart way: if we know something, we don't need to practice it for some period of time. If we don't know something, we do need to practice it.</span>
                <br></br>
                <br></br>
                <span className="landing-descrip"><strong>French Flash Cards</strong> implements the Spaced Repetition method by allowing you to practice French Vocabulary according to its principles. A practice session revolves around a set of vocabulary words served up to you according to which word is at the beginning or <em>head</em> of a vocabulary list. Every word that you translate correctly will be pushed further back in the list, while every word you translate incorrectly will remain near the beginning of the list. As a result, you will be provided with the opportunity to review what you don't know more often until you master it, and revisit what you do know less often in order to test how well you've retained the knowledge!</span>
                <br></br>
                <br></br>
                <span className="landing-descrip">We at <strong>Lingua Franc</strong> trust that you will enjoy using <strong>French Flash Cards</strong> for your French vocabulary practice and wish you both a wonderful life and <em>fantastique</em> day</span>
                <br></br>
                <br></br>
                <span className="landing-page-adieu">Au revior and adieu!</span>
                <br></br>
                <br></br>
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
