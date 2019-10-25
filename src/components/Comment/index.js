import React from 'react';
import './style.css'

export default function Comment({ name, avatar, content }) {
  return (
    <div className="comment">
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
      <div className="comment-text">
        <p>
          <strong>{name}</strong>
          {content}
        </p>
      </div>
    </div>
  );
}
