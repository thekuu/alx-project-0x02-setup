import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white p-4 flex space-x-4">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/posts" className="hover:underline">
        Posts
      </Link>
    </header>
  );
};

export default Header;
