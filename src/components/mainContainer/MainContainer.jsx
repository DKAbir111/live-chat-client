import Sidebar from '../sidebar/Sidebar'
import './mainContainer.css'
// import Chatarea from '../chatarea/Chatarea'
// import { useState } from 'react'
// import Welcoome from '../welcome/Welcoome'
// import Creategroup from '../createGroup/Creategroup'
// import UserGroup from '../userGroup/UserGroup'
import { Outlet } from "react-router-dom";

const MainContainer = () => {

    return (
        <div className='main-container' >
            <Sidebar />
            <Outlet />
            {/* <Chatarea /> */}
            {/* <Welcoome /> */}
            {/* <Creategroup /> */}
            {/* <UserGroup /> */}
        </div>
    )
}

export default MainContainer
