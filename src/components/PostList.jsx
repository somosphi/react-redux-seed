import React, { PropTypes } from 'react';
import _ from 'lodash';

import Post from './Post';
/*
posts: um array de objetos do tipo {id(number), title(string)}
*/

const PostList = (function({data}) {

  let postComponents = [];
  if (data && data.items) {
    postComponents = _.map(data.items, function(post) {
      return (<Post key={post.id} title={post.title} />);
    });
  }

  let isFetching = 'no';
  if (data && data.isFetching) {
      isFetching = data.isFetching ? 'yes' : 'no';
  }

  return (
    <div>
      Is Fetching: {isFetching}
      <ul>{postComponents}</ul>
    </div>
    );
});

PostList.propTypes = {
  data: PropTypes.object
};


export default PostList;
