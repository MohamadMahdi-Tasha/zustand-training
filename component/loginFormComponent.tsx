// Importing part
import { ReactNode } from "react";
import InputComponent from '@/chunk/inputComponent';
import SubmitBtnComponent from '@/chunk/submitBtnComponent';

// Creating and exporting login form as default
export default function LoginFormComponent():ReactNode {
    // Returning JSX
    return (
        <form action="#">
            <InputComponent 
                errorText=""
                id="input-email-login"
                placeHolder="Email:"
                type="email"
            />
            <InputComponent 
                errorText=""
                id="input-password-login"
                placeHolder="Password:"
                type="password"
            />
            <SubmitBtnComponent isSubmitting={false} />
        </form>
    );
}