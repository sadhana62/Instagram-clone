import React from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import {  BookmarkBorderOutlined, ChatBubbleOutline, FavoriteBorder, Telegram } from '@mui/icons-material'
function Post({user,postImage,likes,timestamp}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuther">
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
        {user}_ <span>{timestamp}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="post__image">
        <img src={postImage} alt="post-img"/>
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
           <div className="post_iconMain">
            <FavoriteBorder className="postIcon"/>
            <ChatBubbleOutline className="postIcon"/>
            <Telegram className="postIcon"/>
           </div>
           <div className="post_iconSave">
            <BookmarkBorderOutlined className="postIcon" />
            
           </div>
        </div>
        <div><span>Liked by {likes} peoples</span></div>
      </div>
    </div>
  )
}

export default Post
