/*

{
  addSubredditForm
  subreddits,
  selectedSubreddit,
  postsBySubreddit
}
*/

import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit.js';
import selectedSubreddit from './selectedSubreddit.js';
import subreddits from './subreddits.js';
import errors from './errors.js';


const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  subreddits,
  errors
})

export default rootReducer
