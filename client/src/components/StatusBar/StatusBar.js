import React, { useState, useContext } from 'react';
import './StatusBar.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoodIcon from '@mui/icons-material/Mood';
import { GlobalContext } from '../context/GlobalState';

export default function StatusBar({ users }) {
  const [status, setStatus] = useState('');
  const { addPost } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 100000000),
      status: status,
    };
    addPost(newPost);
    setStatus('');
  };
  return (
    <>
      <div className="status__topRow">
        <img
          src={users.length > 0 ? users[0].picture.thumbnail : ''}
          alt={users.length > 0 ? users[0].name.first : ''}
        />
        <div className="topRow__input">
          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder={`What's on your mind, ${
                users.length > 0 ? users[0].name.first : ''
              }?`}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="status__bottomRow">
        <div className="bottomRow__icons">
          <PhotoLibraryIcon className="icons" />
          <p>Photo/Video</p>
        </div>
        <div className="bottomRow__icons">
          <PersonAddIcon className="icons" />
          <p>Tag Friends</p>
        </div>
        <div className="bottomRow__icons">
          <MoodIcon className="icons" />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </>
  );
}
