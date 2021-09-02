import React, { useState } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'


export const Nav = () => {
    const [active, setActive] = useState(false)
    const toggleSidebar = () => {
        setActive(!active)
    }

    const Navlinks = ({ Links }) => {
        return (
            <div className="nav">
                <Link to="/">{Links}</Link>
            </div>
        )
    }
    return (
        <div className="flex  flex flex-col w-full h-full md:items-center md:justify-between md:flex-row md:w-full md:h-12 bg-black text-white" >
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center flex-start  text-2xl font-bold ml-6">
                    <Link to="/">
                        <svg className="h-8 w-6 mr-1 text-white" focusable="false" viewBox="0 0 24 24" fill="currentColor" >
                            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,
                                    -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,
                                    -0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,
                                    -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,
                                    -2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 
                                    -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,
                                    2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,
                                    0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,
                                    20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" ></path></svg>
                    </Link>
                    <Link to="/">Yakraps</Link>
                </div>

                <div className="  md:hidden mr-4" >
                    <svg onClick={() => toggleSidebar()} stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path></svg>
                </div>
            </div>
            <div className="nav hidden md:flex flex-col ml-5  items-start md:flex-row md:items-center ">
                <Navlinks Links="Trial & Pricing" />
                <Navlinks Links="Payment Method" />
                <Navlinks Links="Get started" />
            </div>
            <SideBar active={active} toggleSidebar={toggleSidebar} />
        </div>

    )
}


