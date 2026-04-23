import React from 'react'
import Heading from './Heading'
import { teamData } from '../assets/assets'
import { motion } from "motion/react"

const Team = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-24 text-gray-800 dark:text-white'
        >
            <Heading title="Meet the team" desc='A passionate team of digital experts dedicated to your brand’s success' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full'>
                {teamData.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                    >
                        <img src={member.image} alt={member.name} className='w-16 h-16 rounded-full object-cover border-2 border-primary/20' />
                        <div className='flex-1'>
                            <h3 className='font-bold text-gray-900 dark:text-white'>{member.name}</h3>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>{member.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Team

