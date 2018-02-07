import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  SUBMIT_QUESTION_REQUEST,
  SUBMIT_QUESTION_SUCCESS,
  SUBMIT_QUESTION_ERROR
} from '../actions/questions';

const initialState = {
  question: '',
  answer: '',
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
      return Object.assign({}, state, {
          question: action.question,
          answer: action.answer,
          error: null
      });
  } else if (action.type === FETCH_QUESTION_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  } else if (action.type === SUBMIT_QUESTION_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
  } else if (action.type === SUBMIT_QUESTION_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        question: '',
        answer: ''
      });
  } else if (action.type === SUBMIT_QUESTION_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      })
  }
  return state;
}
