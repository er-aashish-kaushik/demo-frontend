import './scss'
import * as Component from '../index'
import Footer from '../index'
import { SideNav } from "../index"
const Layout = (props) => {
    return (
        <div>
            <Component.Header />
            <SideNav />
            <div>
                {props?.children || ""}
            </div>
            <Footer />

        </div>
    )
}

export default Layout