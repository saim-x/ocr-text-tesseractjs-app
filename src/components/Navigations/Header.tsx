'use client';

import Link from 'next/link';
import React from 'react';
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <header className="text-white w-full flex justify-between items-center md:px-20 px-5 py-5 sticky top-0 left-0 backdrop-blur-xl bg-gray-900 bg-opacity-60 shadow-lg">
            <div>
                <Button variant="ghost" onClick={handleReload} className="font-bold text-3xl hover:text-indigo-400 transition-colors">
                    ResuAI.
                </Button>
            </div>
            <div>
                <Button
                    className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors flex items-center space-x-2"
                    onClick={() => window.location.href = 'https://github.com/saim-x'}
                >
                    <Github className="h-5 w-5" />
                    <span>Github</span>
                </Button>
            </div>
        </header>
    );
}

export default Header;
