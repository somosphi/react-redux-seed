export const ADD_SUBREDDIT = 'ADD_SUBREDDIT';
export function addSubreddit(subreddit) {
  return {
    type: ADD_SUBREDDIT,
    subreddit,
  };
}
