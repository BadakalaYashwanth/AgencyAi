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
            {/* Decorative Blue Glows */}
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 w-[600px] opacity-70 dark:opacity-30 -z-1 pointer-events-none' />
            <img src={assets.bgImage2} alt="" className='absolute top-20 -left-40 w-[600px] opacity-70 dark:opacity-30 -z-1 pointer-events-none' />

            {/*Trusted by 10k+ people */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full bg-white/50 backdrop-blur-sm'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-1xl font-medium'>Trusted by 10k+ people</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into
                <span className='bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent'> digital</span> impact.</motion.h1>

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