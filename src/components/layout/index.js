import './index.scss'
import * as Component from '../index'
import Footer from '../footer'
import { SideNav } from "../index"
const Layout = (props) => {
    const { className = "" } = props
    return (
        <div className={`layoutContainer ${className}`}>
            <Component.Header className="header" />
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