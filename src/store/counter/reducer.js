import { SUM_VALUE, SUBTRACT_VALUE } from './actions';

function counter(state = 0, action) {
  switch (action.type) {
    case SUM_VALUE:
      return state + action.value;
    case SUBTRACT_VALUE:
      return state - action.value;
    default:
      return state;
  }
}

export default counter;
