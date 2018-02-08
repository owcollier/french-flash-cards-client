import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchQuestionSuccess = (question, answer, head, score) => ({
    type: FETCH_QUESTION_SUCCESS,
    question,
    answer,
    head,
    score
});

export const FETCH_QUESTION_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});

export const SUBMIT_QUESTION_REQUEST = 'SUBMIT_QUESTION_REQUEST';
export const submitQuestionRequest = () => ({
    type: SUBMIT_QUESTION_REQUEST
})

export const SUBMIT_QUESTION_SUCCESS = 'SUBMIT_QUESTION_SUCCESS';
export const submitQuestionSuccess = () => ({
    type: SUBMIT_QUESTION_SUCCESS
})

export const SUBMIT_QUESTION_ERROR = 'SUBMIT_QUESTION_ERROR';
export const submitQuestionError = error => ({
    type: SUBMIT_QUESTION_ERROR,
    error
})

export const fetchQuestion = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    // const user = getState().auth.currentUser;
    return fetch(`${API_BASE_URL}/questions/next`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            // 'Content-Type':'application/json'
        }
        // body: JSON.stringify({
        //   user
        // })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({question, answer, head, score}) => dispatch(fetchQuestionSuccess(question, answer, head, score)))
    .catch(err => {
        dispatch(fetchQuestionError(err));
    });
};

export const submitQuestion = (boolean) => (dispatch,getState) => {
    dispatch(submitQuestionRequest());
    const authToken = getState().auth.authToken;
    return fetch (`${API_BASE_URL}/questions/submit`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            isCorrect: boolean
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        console.log('response from post:', res);
        if(!res.ok) {
          throw new Error(res.statusTest)
        }
        dispatch(submitQuestionSuccess());
        dispatch(fetchQuestion());
    }).catch(err =>
        dispatch(submitQuestionError(err))
    );
}