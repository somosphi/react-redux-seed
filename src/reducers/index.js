/*

{
  addSubredditForm
  subreddits,
  selectedSubreddit,
  postsBySubreddit
}
*/

import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';
import subreddits from './subreddits';
import errors from './errors';


const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  subreddits,
  errors,
});

export default rootReducer;
