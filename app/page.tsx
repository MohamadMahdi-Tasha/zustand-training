// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import LoginFormComponent from "@/component/loginFormComponent";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className="container">
            <LoginFormComponent />
        </div>
    );
}