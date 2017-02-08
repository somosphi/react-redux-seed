/*
STATE SHAPE:
['frontend', 'react']
*/

import { ADD_SUBREDDIT } from '../actions';


export default function selectedSubreddit(state = ['frontend', 'reactjs'], action) {
  switch (action.type) {
    case ADD_SUBREDDIT: {
      const newState = [...state, action.subreddit];
      return newState;
    }
    default:
      return state;
  }
}
