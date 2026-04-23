import React from 'react'
import { toast } from 'react-hot-toast'
import assets from '../assets/assets'
import Heading from './Heading'
import { motion } from "motion/react"

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const toastId = toast.loading("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully", { id: toastId });
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message, { id: toastId });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            id="contact-us"
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-24 text-gray-700 dark:text-white"
        >
            <Heading
                title="Reach out to us"
                desc="Have a project in mind or just want to say hi? We'd love to hear from you."
            />
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
                        <img src={assets.person_icon} alt="" className='w-4 dark:invert' />
                        <input type="text" name="name" placeholder='Enter your name' required className='w-full p-3 text-sm bg-transparent outline-none dark:text-white' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className='mb-2 text-sm font-medium'>Email ID</p>
                    <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
                        <img src={assets.email_icon} alt="" className='w-4 dark:invert' />
                        <input type='email' name="email" placeholder='Enter your email' required className='w-full p-3 text-sm bg-transparent outline-none dark:text-white' />
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='sm:col-span-2'
                >
                    <p className='mb-2 text-sm font-medium'> Message</p>
                    <textarea name="message" rows={8} placeholder='Enter your message' required
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white' />

                </motion.div>
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='bg-primary text-white dark:text-black text-sm font-medium py-3 px-6 rounded-full w-fit flex items-center gap-2 transition-all hover:scale-105'
                >
                    <b>Submit</b> <img src={assets.arrow_icon} alt="" className='w-4 dark:invert' />
                </motion.button>
            </form>
        </motion.div>
    )
}

export default ContactUs