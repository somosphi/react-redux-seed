import axios from 'axios';


export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export function receiveApiError(errorMessage) {
  return {
    type: RECEIVE_API_ERROR,
    errorMessage
  }
}

//este actionCreator retorna uma função
export function fetchPosts(subreddit) {
  return function (dispatch) {

    dispatch(requestPosts(subreddit));

    axios.get('https://www.reddit.com/r/' + subreddit + '.json')
      .then(function (response) {
      
        dispatch(receivePosts(subreddit, response.data));

      })
      .catch(function (error) {

        console.log(error);

        dispatch(receiveApiError(error.response))

      });
  }
}
