// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
    isSubmitting: boolean;
}

// Creating and exporting submit button component as deault
export default function SubmitBtnComponent({isSubmitting}:propsType):ReactNode {
    // Returning JSX
    return (
        <button disabled={isSubmitting}>
            {
                (isSubmitting) 
                    ? 'Loading ...' 
                    : 'Submit'
            }
        </button>
    );
}