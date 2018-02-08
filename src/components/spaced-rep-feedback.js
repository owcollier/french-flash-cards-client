import React from 'react';
import './spaced-rep-answer.css';

export default function SpacedRepFeedback(props) {

    return (
        <div className="session-feedback">
            <div className="session-feedback-header">
            {props.feedback}
            </div>
            <div className="session-feedback-next">
                <button className="button" onClick={() => props.onClick()}>
                Next flash card >
                </button>
            </div>
        </div>
    );
}