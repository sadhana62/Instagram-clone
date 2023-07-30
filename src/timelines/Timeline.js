import React, { useState } from 'react'
import Suggestion from './Suggestion';
import './Timeline.css';
import Post from './posts/Post';
function Timeline() {
  const [posts, setPost] = useState([
    {
      user:"sadhana__",
      postImage:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes:12,
      timestamp:"2d"
    },
    {
      user:"ram__",
      postImage:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes:24,
      timestamp:"3d"
    },
    {
      user:"Ravinder_",
      postImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes:1,
      timestamp:"2hr"
    },
    {
      user:"shiv__",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes:124,
      timestamp:"12d"
    }
  ])
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline
