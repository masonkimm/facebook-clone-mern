import React from 'react';
import './NavBar.css';
// Material UI icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function NavBar({ users }) {
  // console.log(users);
  return (
    <div className="NavBar">
      <div className="NavBar__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <div className="left__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="NavBar__center">
        <div className="center__icons isActive">
          <HomeIcon fontSize="medium" id="isActive" />
        </div>
        <div className="center__icons">
          <OndemandVideoIcon fontSize="medium" />
        </div>
        <div className="center__icons">
          <StorefrontIcon fontSize="medium" />
        </div>

        <div className="center__icons">
          <SupervisedUserCircleIcon fontSize="medium" />
        </div>
        <div className="center__icons">
          <ArticleIcon fontSize="medium" />
        </div>
      </div>
      <div className="NavBar__right">
        <img
          src={users ? users.picture.thumbnail : ''}
          alt={users ? users.name.first : ''}
        />
        <p>{users ? users.name.first : ''}</p>
        <div className="right__icons">
          <AppsIcon fontSize="small" />
        </div>
        <div className="right__icons">
          <ChatIcon fontSize="small" />
        </div>
        <div className="right__icons">
          <NotificationsIcon fontSize="small" />
        </div>
        <div className="right__icons">
          <ArrowDropDownIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
