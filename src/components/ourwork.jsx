import React from "react";
import Heading from "./Heading"; // adjust path if wrong
import assets from "../assets/assets"
import { motion } from "motion/react"

const OurWork = () => {
    const workData = [
        {
            title: "Mobile app marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage ",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard Management",
            description: "We help you execute your plan and deliver results ",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness App promotion",
            description: "We help fitness brands dominate the app stores with data-driven UA strategies",
            image: assets.work_fitness_app
        }
    ]
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            id="our-work"
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-24 text-gray-700 dark:text-white"
        >
            <Heading
                title="Our latest work"
                desc="From strategy to execution, we craft digital solutions that move your business forward"
            />


            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {
                    workData.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="cursor-pointer group"
                        >
                            {/* Image wrapper — clips the zoom */}
                            <div className="overflow-hidden rounded-xl">
                                <motion.img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full rounded-xl"
                                    whileHover={{ scale: 1.07 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>
                            <h3 className="mt-3 mb-2 text-lg font-semibold group-hover:text-primary transition-colors duration-300">{work.title}</h3>
                            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default OurWork;