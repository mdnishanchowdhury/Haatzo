import { Outlet } from 'react-router-dom'
import TopBar from '../Shared/Navbar/TopBar/TopBar'
import HeaderNav from '../Shared/Navbar/HeaderNav/HeaderNav'
import MainNavbar from '../Shared/Navbar/MainNavbar/MainNavbar'

function Main() {
    return (
        <div>
            <TopBar></TopBar>
            <HeaderNav></HeaderNav>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Main