import React from 'react'
import { Nav } from './header/Nav'
import Main from './main/Main'
import Footer from './footer/Footer'

function Layout() {
    return (
        <div className="layout grid grid-flow-row auto-rows-max ">
           <Nav/>
           <Main/>
           <Footer/>
        </div>
    )
}

export default Layout
