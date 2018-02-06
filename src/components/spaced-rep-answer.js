import React from 'react';

export default function SpacedRepAnswer(props) {

    let textInput = null;

    return (
        <div className="session-answer">
            <div className="session-answer-header">
            Please enter English translation below:
            </div>
            <input
              type="text"
              id='textInput'/>
            <button className="button" onClick={() => props.onClick(document.getElementById('textInput').value)}>
              Submit translation!
            </button>
        </div>
    );
}