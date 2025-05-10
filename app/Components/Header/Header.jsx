import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header
        className="bg-gray-500 flex flex-col h-[10vh] w-full">
            <span>Mycomp.am</span>
            <Link href="/">Home</Link>
            <Link href="/post">Post</Link>

        </header>
    );
};

export default Header;