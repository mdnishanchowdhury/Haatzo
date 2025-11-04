import { Outlet } from 'react-router-dom'
import TopBar from '../Shared/Navbar/TopBar'

function Main() {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </div>
    )
}

export default Main