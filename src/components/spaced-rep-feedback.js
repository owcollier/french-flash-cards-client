import React from 'react';
import './spaced-rep-answer.css';

export default function SpacedRepFeedback(props) {

    return (
        <div className="session-feedback">
            <div className="session-feedback-header">
            Feedback here
            </div>
            <div className="session-feedback-next">
                <button className="button" onClick={console.log('next question')}>
                Next flash card >
                </button>
            </div>
        </div>
    );
}