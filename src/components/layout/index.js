import './index.scss'
import Footer from '../footer'
import Header from '../header'
import SideNav from "../sideNav"
const Layout = (props) => {
    const { className = "" } = props
    return (
        <div className={`layoutContainer ${className}`}>
            <Header className="header" />
            <div className='content-wrapper'>
                <SideNav className="sidebar" />
                <div className='content'>
                    {props?.children || ""}
                </div>

            </div>
            <Footer className="footer" />
        </div>
    )
}

export default Layout