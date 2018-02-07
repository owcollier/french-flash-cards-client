import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestion} from '../actions/questions';
import SpacedRepQuestion from './spaced-rep-question';
import SpacedRepAnswer from './spaced-rep-answer';

import './spaced-rep-session.css'

export class SpacedRepSession extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback:''
        };
      }

    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    onClick(input) {
        const answer = input.toLowerCase().trim();
        const correct = this.props.answer.toLowerCase();
        if (answer === correct) {
            this.setState({
                feedback: `${answer} is the correct translation of ${this.props.question}. Congratulations!`
            })
        } else {
            this.setState({
                feedback: `Sorry. ${answer} is not the correct translation. ${this.props.answer} is the correct English translation of ${this.props.question}`
            })
        }
    }

    render() {
        return (
            <div className="session">
                <span className="session-name">
                    Welcome {this.props.name}!
                </span>
                <div className="session-feedback">
                    {this.state.feedback}
                </div>
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
        question: state.question.question,
        answer: state.question.answer
    };
};

export default requiresLogin()(connect(mapStateToProps)(SpacedRepSession));