import React from 'react';
import './style.css'
// import avatar from '../../assets/foto-gabriel.jpg'

import Comment from '../Comment'

export default function Post({ user_avatar, name, date, content }) {
  return (
    <article>
      <div className="meta">
        <figure>
          <img src={user_avatar} alt="" />
        </figure>
        <div className="meta-info">
          <h4>{name}</h4>
          <small>{date}</small>
        </div>
      </div>

      <div className="except">
        <p>{content}</p>
      </div>

      <Comment />
      <Comment />
    </article>
  );
}
