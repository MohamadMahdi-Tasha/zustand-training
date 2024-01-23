// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
    errorText: string;
    placeHolder: string;
    type: 'text' | 'email' | 'password';
    id: `input-${string}`;
}

// Creating and exporting input component as default
export default function InputComponent({errorText, placeHolder, type, id}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <input 
                id={id}
                name={id}
                type={type}
            />
            <label htmlFor={id}>
                {placeHolder}
            </label>
            {
                (errorText !== '') 
                ?  (
                    <div>
                        {errorText}
                    </div>
                ) : false
            }
        </div>
    );
}