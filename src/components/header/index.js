import './index.scss'

const Header = (props) => {
    const { className = "" } = props
    return (
        <div className={`container ${className}`}>Header</div>
    )
}

export default Header