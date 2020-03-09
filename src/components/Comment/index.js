import React from 'react';
import './style.css';


function Comment({ data }) {
  return (
    <>
    <div className="comment">
      <img className="mini-icon" src={data.author.avatar} alt="avatar"/>
      <div className="comment-ballon">
        <div className="comment-content">
          <p><strong>{data.author.name} </strong>{data.content}</p>
        </div>
      </div>

    </div>


    </>
  )
}

export default Comment;
