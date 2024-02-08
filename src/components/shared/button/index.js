import './index.scss'

const Button = (props) => {
    const { className = "" } = props

    return (
        <div className={`button ${className}`}>Button</div>
    )
}

export default Button