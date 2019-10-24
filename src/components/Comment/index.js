import React from 'react';
import './style.css'
import avatar from '../../assets/foto-gabriel.jpg'

export default function Comment() {
  return (
    <div className="comment">
      <figure>
        <img src={avatar} alt="" />
      </figure>
      <div className="comment-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores odio aliquam consequatur similique, quas reiciendis minus consequuntur odit obcaecati quasi doloremque corrupti veniam esse? Labore unde sapiente a maiores?</p>
      </div>
    </div>
  );
}
