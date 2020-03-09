import React from 'react';

import './style.css';
import Comment from '../Comment';

function Post({ data }) {
  return (
    <>
    <div className="post">
      <div className="post-header">
        <img className="mini-icon" src={data.author.avatar} alt="avatar"/>
          <div className="info">
            <h1>{data.author.name}</h1>
            <p className="date">{data.date}</p>
          </div>
      </div>

      <p className="data-content">{data.content}</p>

      <ul>
        {data.comments.map(comment => (
          <Comment
            key={comment.id}
            data={comment}
          />
        ))}
      </ul>
    </div>
    </>
  )
}

export default Post;

