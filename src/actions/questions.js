import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchQuestionSuccess = (question, answer) => ({
    type: FETCH_QUESTION_SUCCESS,
    question,
    answer
});

export const FETCH_QUESTION_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});

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
        .then(({question, answer}) => dispatch(fetchQuestionSuccess(question, answer)))
        .catch(err => {
            dispatch(fetchQuestionError(err));
        });
};