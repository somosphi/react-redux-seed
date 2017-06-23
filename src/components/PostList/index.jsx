import React, { PropTypes } from 'react';
import _ from 'lodash';
import './style.less';

import Post from './../Post.jsx';
/*
posts: um array de objetos do tipo {id(number), title(string)}
*/
const PostList = (({ data }) => {
  let postComponents = [];
  if (data && data.items) {
    postComponents = _.map(data.items, (post) => {
      const postInfo = {
        permalink: post.permalink,
        title: post.title,
        thumbnail: (post.thumbnail === 'default' || post.thumbnail === 'self') ? '/img/default.jpg' : post.thumbnail,
      };

      return (<Post key={post.id} postInfo={postInfo} />);
    });
  }

  let isFetching = 'no';
  if (data && data.isFetching) {
    isFetching = data.isFetching ? 'yes' : 'no';
  }

  return (
    <div className="post-list">
      Is Fetching: {isFetching} <img className={!data.isFetching ? 'hidden' : 'loader'} src="/img/loading.gif" />
      <ul>{postComponents}</ul>
    </div>
  );
});

PostList.propTypes = {
  data: PropTypes.object,
};
PostList.defaultProps = {
  data: {},
};

export default PostList;
