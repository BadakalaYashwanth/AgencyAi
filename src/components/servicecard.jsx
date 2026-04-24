import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className='group h-full p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1120] shadow-sm hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left'>
            <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-rotate-6 transition-all duration-300 shadow-inner'>
                <img src={icon} alt={title} className='w-7 h-7 group-hover:invert duration-300 object-contain' />
            </div>
            <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>{title}</h3>
            <p className='text-gray-500 dark:text-gray-400 leading-relaxed text-sm'>{description}</p>
        </div>
    )
}

export default ServiceCard
