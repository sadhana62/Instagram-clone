import React from 'react'
import './Home.css'
import SideNav from './Navigation/SideNav'
import Timeline from './timelines/Timeline'
function Home() {
  return (
    <div className="homepage">
        <div className="homepage__nav">
        <SideNav></SideNav>
        </div>
        <div className="homepage__timeline">
        <Timeline></Timeline>
        </div>
    </div>
  )
}

export default Home
