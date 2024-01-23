// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import LoginFormComponent from "@/component/loginFormComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className="min-h-screen bg-midOrange">
            <div className="container lg:min-h-screen lg:flex lg:items-center lg:justify-center">
                <LoginFormComponent />
            </div>
        </div>
    );
}