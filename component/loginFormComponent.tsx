// Codes by mahdi tasha
// Forcing nextJS to render this component as client side componet\
'use client';

// Importing part
import { ReactNode } from "react";
import InputComponent from '@/chunk/inputComponent';
import SubmitBtnComponent from '@/chunk/submitBtnComponent';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { useLoginState } from "@/app/store";

// Defining type of email forms
type formType = {
    email: string;
    password: string;
}

// Creating and exporting login form as default
export default function LoginFormComponent():ReactNode {
    // Getting login state 
    const { logIn } = useLoginState();

    // Defining useForm hook to use
    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting,
            isValid
        }
    } = useForm<formType>();

    // Defining useRouter hook to use
    const router = useRouter();

    // Defining onSubmit handler on form
    const onSubmit: SubmitHandler<formType> = async ({ email, password }) => {  
        await new Promise((resolve) => setTimeout(resolve, 3000));

        if (
            email !== 'hello@gmail.com' &&
            password !== '12345678'
        ) {setError('root', { message: 'Your information didn"t match. try again' })}
        else if (
            email === 'hello@gmail.com' &&
            password === '12345678'
        ) { 
            router.push('/app');
            logIn(); 
        }
    }

    // Returning JSX
    return (
        <form 
            data-valid={isValid}
            onSubmit={handleSubmit(onSubmit)}
            action="#" 
            className="lg:p-[20px] p-[10px] lg:gap-[20px] gap-[15px] flex flex-col lg:rounded-[20px] rounded-[10px] lg:w-[50%] w-full bg-blue shadow-xl border-4 data-[valid='true']:border-white data-[valid='false']:border-red-600"
        >
            <p className="text-green-600 lg:text-[16px] text-[13px] font-bold">
                Email: hello@gmail.com <br />
                Password: 12345678
            </p>
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
            {
                (errors.root && errors.root.message !== '') 
                ?  (
                    <div>
                        <p className="text-orange lg:text-[16px] text-[13px] font-bold">
                            {errors.root.message}
                        </p>
                    </div>
                ) : false
            }
            <SubmitBtnComponent isSubmitting={isSubmitting} />
        </form>
    );
}
