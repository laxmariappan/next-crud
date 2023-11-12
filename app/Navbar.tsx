import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="container p-4 flex justify-between items-center mx-auto">
      <Link href="/">Logo</Link>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-6">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar