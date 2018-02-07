import React from 'react';
import './spaced-rep-question.css'

export default function SpacedRepQuestion(props) {

    return (
        <div className="session-question">
            <div className="session-question-header">
            What is the English translation of this French word?
            </div>
            <div className="session-question-word">
            {props.question}
            </div>
        </div>
    );
}