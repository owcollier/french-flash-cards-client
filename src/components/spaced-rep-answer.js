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
              ref={(input) => {textInput = input; }} />
            <button className="button" onClick={textInput => props.onClick(textInput)}>
              Submit translation!
            </button>
        </div>
    );
}