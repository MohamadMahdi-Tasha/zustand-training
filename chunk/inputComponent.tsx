// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";

// Defining type of props
interface propsType {
    errorText: string | undefined;
    placeHolder: string;
    type: 'email' | 'password';
    id: string;
    register: UseFormRegister<any>;
    name: string;
}

// Creating and exporting input component as default
export default function InputComponent({errorText, placeHolder, type, id, register, name}:propsType):ReactNode {
    // Defining state of component 
    const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);
    const [value, setValue]:[string | undefined, Dispatch<any>] = useState('');

    // Defining a refrence to input
    const inputRef:MutableRefObject<HTMLInputElement | null> = useRef(null);
    const inputElement:HTMLInputElement | null = inputRef.current;

    // Returning JSX
    return (
        <div data-focused={isFocused}>
            <div className="relative">
                <input 
                    {...register(name, {
                        onBlur: () => (value === '') ? setFocused(false) : setFocused(true),
                        onChange: () => setValue(inputElement?.value),
                        value: value
                    })}
                    className="border bg-blue border-white text-white text-[16px] font-normal rounded-[10px] w-full p-[10px] transition outline-none"
                    onFocus={() => setFocused(true)}
                />
                <label 
                    data-focused={isFocused}
                    className="text-white absolute bg-blue -translate-y-[50%] transition data-[focused='false']:top-[50%] data-[focused='false']:left-[10px] data-[focused='false']:text-[15px] data-[focused='false']:px-0 data-[focused='true']:top-0 data-[focused='true']:left-[30px] data-[focused='true']:text-[12px] data-[focused='true']:px-[20px]"
                    htmlFor={id} 
                >
                    {placeHolder}
                </label>
            </div>
            {
                (errorText && errorText !== '') 
                ?  (
                    <div className="mt-[20px]">
                        <p className="text-orange lg:text-[16px] text-[13px] font-bold">
                            {errorText}
                        </p>
                    </div>
                ) : false
            }
        </div>
    );
}