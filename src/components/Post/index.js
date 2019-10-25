import React from 'react';
import './style.css'

import Comment from '../Comment'

export default function Post({ user_avatar, name, date, content, comments }) {

  return (
    <article>
      <div className="meta">
        <div className="avatar" style={{ backgroundImage: `url(${user_avatar})` }}></div>
        <div className="meta-info">
          <h4>{name}</h4>
          <small>{date}</small>
        </div>
      </div>

      <div className="except">
        <p>{content}</p>
      </div>

      {comments.map(comment => (
        <Comment name={comment.author.name} avatar={comment.author.avatar} content={comment.content} />
      ))}
    </article>
  );
}
