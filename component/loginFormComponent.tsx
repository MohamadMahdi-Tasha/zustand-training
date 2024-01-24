// Forcing nextJS to render this component as client side componet\
'use client';

// Importing part
import { FormEvent, ReactNode } from "react";
import InputComponent from '@/chunk/inputComponent';
import SubmitBtnComponent from '@/chunk/submitBtnComponent';
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';

// Defining type of email forms
type formType = {
    email: string;
    password: string;
}

// Creating and exporting login form as default
export default function LoginFormComponent():ReactNode {
    // Defining useForm hook to use
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<formType>();

    // Defining onSubmit handler on form
    const onSubmit: SubmitHandler<formType> = (data) => {
        console.log(data);
    }

    // Returning JSX
    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            action="#" 
            className="p-[20px] gap-[20px] flex flex-col rounded-[20px] lg:w-[50%] w-full bg-blue shadow-xl"
        >
            <InputComponent 
                name="email"
                register={register}
                errorText={errors.email?.message}
                id="input-email-login"
                placeHolder="Email:"
                type="email"
            />
            <InputComponent 
                name="password"
                register={register}
                errorText={errors.password?.message}
                id="input-password-login"
                placeHolder="Password:"
                type="password"
            /> 
            <SubmitBtnComponent isSubmitting={isSubmitting} />
        </form>
    );
}
