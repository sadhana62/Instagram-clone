import React from 'react'
import './SideNav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { auth} from '../firebase';
import { logoutUser } from '../features/userSlice';
import {signOut} from "firebase/auth"

function SideNav() {
  const user = useSelector((state)=> state.data.user.user);
  const dispatch = useDispatch();
  const handlLogout = ()=> {
    dispatch(logoutUser());
    signOut(auth);
  }
  return (
    <div className='sidenav'>
      <img className='sidenav__logo'src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
      alt="insta-logo"></img>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon></HomeIcon>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon></SearchIcon>
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon></ExploreIcon>
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon></SlideshowIcon>
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleIcon></AddCircleIcon>
          <span>create</span>
        </button>
        <button className="sidenav__button">
          <Avatar>A</Avatar>
          <span></span>
          <button onClick={handlLogout}className="logout__button">Log Out</button>
        </button>
      </div>
      <div className="sidenav__more">
        <button className='sidenav__button'>
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav
