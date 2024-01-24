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
        <button 
            disabled={isSubmitting} 
            className="p-[10px] rounded-[10px] bg-orange text-center text-[16px] font-bold text-white transition hover:bg-midOrange disabled:opacity-50 disabled:pointer-events-none"
        >
            {
                (isSubmitting) 
                    ? 'Loading ...' 
                    : 'Submit'
            }
        </button>
    );
}