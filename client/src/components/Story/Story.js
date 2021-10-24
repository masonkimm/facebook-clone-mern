import React from 'react';
import './Story.css';

export default function Story({ users, pictures }) {
  return (
    <>
      {pictures ? (
        <div
          className="story"
          style={{ backgroundImage: `URL(${pictures.urls.small})` }}
        >
          <img
            src={users ? users.picture.thumbnail : ''}
            alt={users ? users.name.first : ''}
            id="userThumbnail"
          />
          <p>
            {users ? users.name.first : ''} {users ? users.name.last : ''}
          </p>
        </div>
      ) : null}
    </>
  );
}
