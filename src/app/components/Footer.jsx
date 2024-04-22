import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="absolute h-10 bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-300 md:flex md:items-center md:justify-between md:p-6 md:h-10 dark:bg-gray-800 dark:border-gray-600">
            <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Chiranabin™ All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/PrivacyPolicy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/TermsAndConditions" className="hover:underline me-4 md:me-6">Terms & Conditions</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}




