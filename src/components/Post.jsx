import React, { PropTypes } from 'react';


const Post = ({ title }) => {
  return (<li>{title}</li>);
};


Post.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Post;
