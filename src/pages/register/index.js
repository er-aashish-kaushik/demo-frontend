import RegisterForm from '../../components/forms/registrationForm'
import { REGISTER } from '../../configs/constants'
import './index.scss'

const Register = () => {
    return (
        <div className={`dashboard`}>
            <div>{REGISTER.TITLE}</div>
            <RegisterForm />
        </div>
    )
}

export default Register