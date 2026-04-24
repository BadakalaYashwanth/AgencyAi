import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"


// Navbar component, receives theme and function to change theme
const Navbar = ({ theme, setTheme }) => {

    // Controls whether sidebar is open or closed
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        // Main navbar container, sticky at top with blur background
        //Motion is used for smooth animations
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-black/70'>

            {/* Logo, changes based on theme */}
            <img
                src={theme === 'dark' ? assets.logo_dark : assets.logo}
                className='w-36 sm:w-48'
                alt=''
            />

            {/* Navigation links + mobile sidebar */}
            <div
                className={`text-gray-700 dark:text-white sm:text-sm
                ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
                max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
                max-sm:flex-col max-sm:bg-primary dark:max-sm:bg-[#111] max-sm:text-white max-sm:pt-20
                flex sm:items-center gap-5 transition-all`}
            >

                {/* Close button for mobile sidebar */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute right-4 top-4 sm:hidden cursor-pointer text-white p-1"
                    aria-label="Close Menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Navigation links shown in navbar or mobile sidebar */}

                {/* Home link → takes user to Home section, also closes sidebar on mobile */}
                <a
                    onClick={() => setSidebarOpen(false)}  // closes the sidebar after clicking (mobile view)
                    href='#home'                           // scrolls to Home section
                    className='sm:hover:border-b'          // adds bottom border on hover (desktop only)
                >
                    Home
                </a>

                {/* Services link → takes user to Services section */}
                <a
                    onClick={() => setSidebarOpen(false)}  // closes sidebar after click
                    href='#services'                      // scrolls to Services section
                    className='sm:hover:border-b'         // hover underline effect on desktop
                >
                    Services
                </a>

                {/* Our Work link → takes user to portfolio/work section */}
                <a
                    onClick={() => setSidebarOpen(false)}  // closes sidebar after click
                    href='#our-work'                       // scrolls to Our Work section
                    className='sm:hover:border-b'         // hover effect
                >
                    Our Work
                </a>

                {/* Contact Us link → takes user to contact section */}
                <a
                    onClick={() => setSidebarOpen(false)}  // closes sidebar after click
                    href='#contact-us'                     // scrolls to Contact section
                    className='sm:hover:border-b'         // hover effect
                >
                    Contact Us
                </a>

            </div>

            {/* Right side actions */}
            <div className='flex items-center gap-4'>

                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                {/* Connect button (hidden on small screens) */}
                <motion.a
                    href="#contact-us"
                    className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Connect
                    <img src={assets.arrow_icon} width={14} alt="" />
                </motion.a>

                {/* Hamburger menu icon (only on small screens) */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="sm:hidden cursor-pointer p-1"
                    aria-label="Open Menu"
                    style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>

        </motion.div>
    )
}

export default Navbar