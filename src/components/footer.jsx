import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className='bg-[#F8FAFF] dark:bg-gray-900 pt-20 pb-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 text-gray-700 dark:text-white'
        >
            <div className='flex flex-col md:flex-row justify-between items-start gap-10 mb-16'>
                {/* Left Side: Logo and Description */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-start gap-5 max-w-sm'
                >
                    <img
                        src={assets.logo}
                        className='w-40 dark:hidden'
                        alt='Agency AI Logo'
                    />
                    <img
                        src={assets.logo_dark}
                        className='w-40 hidden dark:block'
                        alt='Agency AI Logo'
                    />
                    <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                        From strategy to execution, we craft digital solutions that move your business forward.
                    </p>

                    {/* Navigation Links directly under description */}
                    <div className='flex gap-6 text-sm font-semibold mt-4 text-[#4B5E7D] dark:text-gray-300'>
                        <a href="#home" className='hover:text-primary transition-colors'>Home</a>
                        <a href="#services" className='hover:text-primary transition-colors'>Services</a>
                        <a href="#our-work" className='hover:text-primary transition-colors'>Our work</a>
                        <a href="#testimonial" className='hover:text-primary transition-colors'>Testimonial</a>
                    </div>
                </motion.div>

                {/* Right Side: Newsletter */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-4 w-full max-w-md'
                >
                    <h3 className='text-lg font-bold text-[#2D3A4B] dark:text-white'>Subscribe to our newsletter</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    <div className='flex w-full mt-2'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className='flex-1 p-3 rounded-l-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary transition-colors text-sm'
                        />
                        <button className='bg-primary text-white px-8 py-3 rounded-r-lg font-medium hover:bg-opacity-90 transition-all text-sm'>
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className='pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-5'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='text-sm text-gray-400 dark:text-gray-500'
                >
                    Copyright 2026 © agency.ai - All Right Reserved.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <SocialIcons />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Footer



