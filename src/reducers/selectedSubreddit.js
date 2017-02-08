/*
STATE SHAPE:
'frontend'
*/

import { SELECT_SUBREDDIT } from '../actions';

export default function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}
