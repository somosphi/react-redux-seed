import { RECEIVE_API_ERROR } from './actions';

export default function errors(state = {
  code: 0,
  message: '',
}, action) {
  switch (action.type) {
    case RECEIVE_API_ERROR:
      return action.message;
    default:
      return state;
  }
}
