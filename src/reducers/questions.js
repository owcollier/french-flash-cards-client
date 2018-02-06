import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR
} from '../actions/questions';

const initialState = {
  question: '',
  answer: '',
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
  }
  return state;
}
