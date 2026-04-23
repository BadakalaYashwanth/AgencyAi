import React from 'react'
import assets from '../assets/assets'
import Heading from './Heading'
import ServiceCard from './servicecard'
import { motion } from "motion/react"

const Service = () => {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'We create targeted advertising campaigns that reach your ideal customers and drive measurable results.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We create engaging content that tells your brand story and connects with your audience.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We create high-quality, SEO-optimized content that engages your audience and boosts your brand.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We build and manage thriving online communities that turn followers into loyal customers.',
            icon: assets.social_icon
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            id='services'
            className='relative flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-24 text-gray-700 dark:text-white'
        >
            {/* Background Decorative Image */}
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden pointer-events-none' />

            <Heading title='How can we help' desc='We offer a comprehensive suite of services designed to elevate your brand and drive measurable growth.' />

            {/* Services Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8'>
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Service

