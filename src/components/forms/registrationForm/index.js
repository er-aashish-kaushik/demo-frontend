import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../shared/input';
import Label from '../../shared/label';
import Button from '../../shared/button';
import { REGISTER } from '../../../configs/constants'

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor={REGISTER.FIRST_NAME_ID}>{REGISTER.FIRST_NAME_LABEL}:</Label>
            <Input
                type="text"
                id={REGISTER.FIRST_NAME_ID}
                {...register(
                    REGISTER.FIRST_NAME_ID, {
                    required: REGISTER.FIRST_NAME_REQUIRED_MSG
                })}
            />
            {errors[REGISTER.FIRST_NAME_ID] && <p>{errors[REGISTER.FIRST_NAME_ID].message}</p>}

            <Label htmlFor={REGISTER.LAST_NAME_ID}>{REGISTER.LAST_NAME_LABEL}:</Label>
            <Input
                type="text"
                id={REGISTER.LAST_NAME_ID}
                {...register(
                    REGISTER.LAST_NAME_ID, {
                    required: REGISTER.LAST_NAME_REQUIRED_MSG
                })}
            />
            {errors[REGISTER.LAST_NAME_ID] && <p>{errors[REGISTER.LAST_NAME_ID].message}</p>}

            <Label htmlFor={REGISTER.EMAIL.ID}>{REGISTER.EMAIL.LABEL}:</Label>
            <Input
                type="email"
                id={REGISTER.EMAIL.ID}
                {...register(
                    REGISTER.EMAIL.ID, {
                    required: REGISTER.EMAIL.REQUIRED_MSG,
                    pattern: REGISTER.EMAIL.PATTERN
                })}
            />
            {errors[REGISTER.EMAIL.ID] && <p>{errors[REGISTER.EMAIL.ID].message}</p>}

            <Label htmlFor={REGISTER.PASSWORD.ID}>{REGISTER.PASSWORD.LABEL}:</Label>
            <Input
                type="password"
                id={REGISTER.PASSWORD.ID}
                {...register(
                    REGISTER.PASSWORD.ID, {
                    required: REGISTER.PASSWORD.REQUIRED_MSG,
                    minLength: REGISTER.PASSWORD.MIN_LENGTH
                })}
            />
            {errors[REGISTER.PASSWORD.ID] && <p>{errors[REGISTER.PASSWORD.ID].message}</p>}

            <Label htmlFor={REGISTER.CONFIRM_PASSWORD.ID}>{REGISTER.CONFIRM_PASSWORD.LABEL}:</Label>
            <Input
                type="password"
                id={REGISTER.CONFIRM_PASSWORD.ID}
                {...register(
                    REGISTER.CONFIRM_PASSWORD.ID, {
                    required: REGISTER.CONFIRM_PASSWORD.REQUIRED_MSG,
                    minLength: REGISTER.CONFIRM_PASSWORD.MIN_LENGTH
                })}
            />
            {errors[REGISTER.CONFIRM_PASSWORD.ID] && <p>{errors[REGISTER.CONFIRM_PASSWORD.ID].message}</p>}

            <Button type="submit" label={REGISTER.SUBMIT_BTN} />
        </form>
    );
}

export default RegisterForm;
