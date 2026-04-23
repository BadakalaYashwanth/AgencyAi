import React, { useState, useEffect, useRef, useEffectEvent } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy.jsx'
import Service from './components/Service.jsx'
import OurWork from './components/ourwork.jsx'
import Team from './components/team.jsx'
import ContactUs from './components/contactus.jsx'
import Footer from './components/footer.jsx'
import { useFormState } from 'react-dom'
import { motion } from "motion/react"

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')


    const dotRef = useRef(null);
    const outlineRef = useRef(null);


    //Refs for custom cursor position tracking
    const mouse = useRef({ x: 0, y: 0 })
    const position = useRef({ x: 0, y: 0 })
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY

        }
        document.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.1
            position.current.y += (mouse.current.y - position.current.y) * 0.1

            if (dotRef.current && outlineRef.current) {
                dotRef.current.style.transform = `translate3d(${position.current.x - 6}px, ${position.current.y - 6}px, 0)`
                outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
            }
            requestAnimationFrame(animate)
        }
        animate()

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])


    //Theme Toggle
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className='min-h-screen bg-white dark:bg-black transition-colors duration-300'>
            <Toaster />
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <TrustedBy />
            <Service />
            <OurWork />
            <Team />
            <ContactUs />
            <Footer />

            {/* Custom Cursor Ring */}
            <div
                ref={outlineRef}
                className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-9999' style={{
                    transition:
                        'transform 0.1s ease-out'
                }}
            ></div>

            {/* Custom Cursor Dot */}
            <div
                ref={dotRef}
                className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-9999'
            ></div>
        </div>
    )
}

export default App