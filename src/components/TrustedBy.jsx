import React from "react";
import { company_logos } from "../assets/assets"
import { motion } from "motion/react"

const TrustedBy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 
                        dark:text-white/80"
        >
            <h3 className="font-semibold text-lg">
                Trusted by Leading Companies
            </h3>

            <div className="flex items-center justify-center flex-wrap gap-10 m-4">
                {
                    company_logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                            viewport={{ once: true }}
                            src={logo}
                            alt=""
                            className="max-h-5 sm:max-h-6 dark:brightness-125 dark:contrast-125"
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default TrustedBy