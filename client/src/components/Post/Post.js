import React, { useContext } from 'react';
import './Post.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IosShareIcon from '@mui/icons-material/IosShare';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { GlobalContext } from '../context/GlobalState';

export default function Post({
  users,
  pictures,
  day,
  like,
  comment,
  share,
  status,
  _id,
}) {
  const { deletePost } = useContext(GlobalContext);

  return (
    <div className="post">
      <div className="post__heading">
        <div className="heading__info">
          <img
            src={users ? users.picture.thumbnail : ''}
            alt={users ? users.name.first : ''}
          />
          <div className="">
            <h4>
              {users ? users.name.first : ''} {users ? users.name.last : ''}
            </h4>
            <p>{`${day ? day : 0} ${day >= 2 ? 'days ago' : 'day ago'} `}</p>
          </div>
        </div>
        <div className="heading__removeBtn">
          {_id ? <button onClick={() => deletePost(_id)}>X</button> : null}
          {/* <button onClick={() => deletePost(_id)}>X</button> */}
        </div>
      </div>
      <div className="post__body">
        {status ? (
          status
        ) : (
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        )}

        {pictures ? (
          <img
            src={pictures ? pictures.urls.small : ''}
            alt={`Description: ${pictures ? pictures.description : ''}`}
          />
        ) : null}
      </div>
      <div className="post__footer">
        <div className="footer__top">
          <div className="top__left">
            <EmojiEmotionsIcon />
            <p>{`${like ? like : '0'} ${like >= 2 ? 'likes' : 'like'} `}</p>
          </div>
          <div className="top__right">
            <p>{`${comment ? comment : '0'} ${
              comment >= 2 ? 'comments' : 'comment'
            } `}</p>
            <p>{`${share ? share : '0'} ${
              share >= 2 ? 'shares' : 'share'
            } `}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="bottom__item">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="bottom__item">
            <ChatBubbleIcon />
            <p>Comment</p>
          </div>
          <div className="bottom__item">
            <IosShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
