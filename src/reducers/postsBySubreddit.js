/*
STATE SHAPE:
{
  frontend: {
    isFetching: true,
    didInvalidate: false,
    items: []
  },
  reactjs: {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: 1439478405547,
    errorMessage: null,
    items: [
      {
        id: 42,
        title: 'Confusion about Flux and Relay'
      },
      {
        id: 500,
        title: 'Creating a Simple Application Using React JS and Flux Architecture'
      }
    ]
  }
}
*/

import { INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_API_ERROR } from '../actions';


function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        errorMessage: null,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        errorMessage: null,
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    case RECEIVE_API_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        errorMessage: action.errorMessage,
        items: [],
        lastUpdated: null,
      });
    default:
      return state;
  }
}

export default function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    case RECEIVE_API_ERROR:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      });
    default:
      return state;
  }
}
