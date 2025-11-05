import { Outlet } from 'react-router-dom'
import TopBar from '../Shared/Navbar/TopBar/TopBar'
import HeaderNav from '../Shared/Navbar/HeaderNav/HeaderNav'
import MainNavbar from '../Shared/Navbar/MainNavbar/MainNavbar'
import Footer from '../Shared/Footer/Footer'

function Main() {
    return (
        <div>
            <TopBar></TopBar>
            <HeaderNav></HeaderNav>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main