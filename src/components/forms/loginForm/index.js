import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../shared/input';
import Label from '../../shared/label';
import Button from '../../shared/button';
import { LOGIN, GENERAL } from '../../../configs/constants';
import { loginCall } from '../../../services/api'
import { setLocalStorage } from '../../../utils/localstorage';
import { AuthContext } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
            const res = await loginCall(data)
            setLocalStorage('userData', res.data.data)
            setLocalStorage(GENERAL.ACCESS_TOKEN_KEY, res?.data?.data?.accessToken)
            setLocalStorage(GENERAL.REFRESH_TOKEN_KEY, res?.data?.data?.refreshToken)
            login()
            navigate('/')
        } catch (error) {
            console.log("error----", error)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor={LOGIN.EMAIL.ID}>{LOGIN.EMAIL.LABEL}:</Label>
            <Input
                type="email"
                id={LOGIN.EMAIL.ID}
                {...register(
                    LOGIN.EMAIL.ID, {
                    required: LOGIN.EMAIL.REQUIRED_MSG,
                    pattern: LOGIN.EMAIL.PATTERN
                })}
            />
            {errors[LOGIN.EMAIL.ID] && <p>{errors[LOGIN.EMAIL.ID].message}</p>}

            <Label htmlFor={LOGIN.PASSWORD.ID}>{LOGIN.PASSWORD.LABEL}:</Label>
            <Input
                type="password"
                id={LOGIN.PASSWORD.ID}
                {...register(
                    LOGIN.PASSWORD.ID, {
                    required: LOGIN.PASSWORD.REQUIRED_MSG,
                    minLength: LOGIN.PASSWORD.MIN_LENGTH
                })}
            />
            {errors[LOGIN.PASSWORD.ID] && <p>{errors[LOGIN.PASSWORD.ID].message}</p>}

            <Button type="submit" label={LOGIN.SUBMIT_BTN} />
        </form>
    );
}

export default LoginForm;
