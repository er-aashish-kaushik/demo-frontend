import LoginForm from '../../components/forms/loginForm'
import { LOGIN } from '../../configs/constants'
import './index.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className='title'>{LOGIN.TITLE}</div>
            <LoginForm />
        </div>
    )
}

export default Login