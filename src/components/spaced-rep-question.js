import React from 'react';
import './css/spaced-rep-question.css'

export default function SpacedRepQuestion(props) {

    return (
        <div className="session-question">
            <div className="card-counter">Flash card {props.head} of 20</div>
            <div className="session-question-header">
                What is the English translation of this French word/phrase?
            </div>
            <div className="session-question-word">
                {props.question}
            </div>
        </div>
    );
}