// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
// import '@/page/index.css';

// Defining "JetBrains_Mono" font
const JetBrainsMonoFont = JetBrains_Mono({
    weight: ['300', '500', '600', '700'],
    display: 'auto'
});

// Defining metadata of pages
export const metadata:Metadata = {
    title: 'Zustand and react-hook-form training project',
    description: 'This is a training project made with nextJS, react-hook-form, zustand and tailwindCSS which is small app which has login and get some data and do some ther dummy things...',
    keywords: [
        'programming',
        'coding',
        'web',
        'nextJS',
        'website design',
        'react',
        'typescript',
        'javascript',
        'talwindCSS',
        'training',
        'form',
        'login'
    ],
};

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting root layout of the page as default
export default function RootLayout({children}:propsType):ReactNode {
    // Retutning JSX
    return (
        <html>
            <body className={`overflow-hidden ${JetBrainsMonoFont.className}`}>
                {children}
            </body>
        </html>
    );
}