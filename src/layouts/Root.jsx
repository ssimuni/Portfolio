import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Root = () => {
    return (
        <div data-theme="synthwave">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root