import React from 'react';
import './style.css'
import avatar from '../../assets/foto-gabriel.jpg'

import Comment from '../Comment'

export default function Post() {
  return (
    <article>
      <div className="meta">
        <figure>
          <img src={avatar} alt="" />
        </figure>
        <div className="meta-info">
          <h4>Gabriel Costa</h4>
          <small>04 Jun 2019</small>
        </div>
      </div>

      <div className="except">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut, necessitatibus eveniet totam obcaecati nobis eius dolore ad asperiores fugiat nemo cumque? Explicabo dolore beatae eum voluptas, vitae facere ullam!</p>
      </div>

      <Comment />
      <Comment />
    </article>
  );
}
