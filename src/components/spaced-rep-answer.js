import React from 'react';
import './spaced-rep-answer.css';

export default function SpacedRepAnswer(props) {

    return (
        <div className="session-answer">
            <div className="session-answer-header">
            Please enter English translation below:
            </div>
            <div className="session-answer-input">
                <input
                type="text"
                id='textInput'/>
                <button className="button" onClick={() => props.onClick(document.getElementById('textInput').value)}>
                Submit translation!
                </button>
            </div>
        </div>
    );
}