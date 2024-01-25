// Codes by Mahdi Tasha
// Importing part
import { ReactNode } from "react";

// Creating and exporting app page as default
export default function AppPage():ReactNode {
    // Returning JSX
    return (
        <div className="container-no-flex">
            <div className="w-full">
                <h1 className="title">
                    Todo:
                </h1>
                <p className="paragraph">
                    A medication (also called medicament, medicine, pharmaceutical drug, medicinal drug or simply drug) is a drug used to diagnose, cure, treat, or prevent disease. Drug therapy (pharmacotherapy) is an important part of the medical field and relies on the science of pharmacology for continual advancement and on pharmacy for appropriate management.
                </p>
            </div>
        </div>
    );
}