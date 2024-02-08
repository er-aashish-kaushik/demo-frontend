import './index.scss'

const SideNav = (props) => {
    const { className = "" } = props

    return (
        <div className={`container ${className}`}>SideNav</div>
    )
}

export default SideNav