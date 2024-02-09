import './index.scss'

const Button = ({
    className = "",
    label = "Button",
    ...rest
}) => {

    return (
        <button className={`button ${className}`} {...rest}>{label}</button>
    )
}

export default Button