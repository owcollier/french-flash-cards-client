import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestion} from '../actions/questions';
import SpacedRepQuestion from './spaced-rep-question';
import SpacedRepAnswer from './spaced-rep-answer';

import './spaced-rep-session.css'

export class SpacedRepSession extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    onClick(input) {
      console.log(input);
    }

    render() {
        return (
            <div className="session">
                <span className="session-name">
                    Welcome {this.props.name}!
                </span>
                <div className="session-qa">
                    <SpacedRepQuestion question={this.props.question}/>
                    <SpacedRepAnswer onClick={input => this.onClick(input)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        question: state.question.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(SpacedRepSession));