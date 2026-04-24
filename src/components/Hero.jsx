import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div
            id='home'
            /*Center the Content and padding "Trusted by 10k+ people"*/
            className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'
        >
            {/* Decorative Blue Glows — floating animation */}
            <motion.img
                src={assets.bgImage1}
                alt=""
                className='absolute -top-40 -right-40 w-[600px] opacity-70 dark:opacity-30 -z-1 pointer-events-none'
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
                src={assets.bgImage2}
                alt=""
                className='absolute top-20 -left-40 w-[600px] opacity-70 dark:opacity-30 -z-1 pointer-events-none'
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/*Trusted by 10k+ people */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <motion.div
                    animate={{ y: [0, -6, 0] }} // Gentle idle floating
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className='relative overflow-hidden inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-[length:200%_200%] text-white shadow-xl shadow-[#ee2a7b]/30 cursor-pointer border border-white/20'
                    style={{ animation: 'flowing-gradient 4s ease infinite' }}
                >
                    <style>
                        {`
                        @keyframes flowing-gradient {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        `}
                    </style>
                    {/* Glass Shimmer wipe */}
                    <motion.div
                        className="absolute inset-0 w-[150%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-0 pointer-events-none"
                        animate={{ x: ['-100%', '150%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                    />
                    <img className='w-20 relative z-10 pointer-events-none' src={assets.group_profile} alt="" />
                    <p className='text-1xl font-medium relative z-10'>Trusted by 10k+ people</p>
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mb-2'>
                <span className="pb-4" style={{ background: 'linear-gradient(135deg, #3530d4 0%, #9b10a8 20%, #e0104c 40%, #ff3300 60%, #ff8c00 80%, #ffd000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                    Turning imagination into digital impact.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className='relative flex items-center justify-center w-full'>
                <div className='absolute w-[70%] h-[70%] bg-primary/20 blur-[120px] -z-10 rounded-full'></div>
                <img src={assets.hero_img} alt="" className='w-full max-w-7xl relative z-10' />
            </motion.div>
        </div >
    )
}

export default Hero