import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Post = () => {
  // We fetch the ID from the URL
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <h2>ID is = {id}</h2>
      <h2>First is = {query.get('first')}</h2>
      <h2>Last is = {query.get('last')}</h2>
    </>
  );
};

export default Post;
