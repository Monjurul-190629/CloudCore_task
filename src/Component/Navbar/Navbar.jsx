'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { IoLogoCodepen } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Left - Logo */}
                <div className="flex items-center">
                    <IoLogoCodepen className='text-blue-700 w-20 h-12'/>
                    <span className="text-2xl font-bold text-indigo-600">Potion</span>
                </div>

                {/* Center - Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-indigo-600 transition">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-indigo-600 transition">
                        Products
                    </Link>
                    <Link href="/order" className="hover:text-indigo-600 transition">
                        Order
                    </Link>
                </div>

                {/* Right - Buttons (hidden on mobile) */}
                <div className="hidden md:flex space-x-3">
                    <button className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-500 transition">
                        Login
                    </button>
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-500 transition">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow">
                    <div className="flex flex-col space-y-3 text-gray-700 font-medium">
                        <Link href="/" className="hover:text-indigo-600 transition">
                            Home
                        </Link>
                        <Link href="/products" className="hover:text-indigo-600 transition">
                            Products
                        </Link>
                        <Link href="/order" className="hover:text-indigo-600 transition">
                            Order
                        </Link>
                        <button className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-500 transition">
                            Login
                        </button>
                        <button className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-500 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
