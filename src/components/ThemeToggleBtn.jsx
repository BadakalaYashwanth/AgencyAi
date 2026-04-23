import React, { useEffect } from 'react'
import assets from '../assets/assets'

// Functional component receiving theme and setTheme as props
const ThemeToggleBtn = ({ theme, setTheme }) => {
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            {/* Button wrapper */}
            <button>

                {/* 
          Ternary condition:
          If current theme is 'dark', show sun icon (to switch to light)
          Else, show moon icon (to switch to dark)
        */}

                {theme === 'dark' ? (

                    // Sun icon (click → switch to light theme)
                    <img
                        onClick={() => setTheme('light')} // Updates theme to light
                        src={assets.sun_icon} // Image source
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full' // Styling
                        alt="sun icon"
                    />

                ) : (

                    // Moon icon (click → switch to dark theme)
                    <img
                        onClick={() => setTheme('dark')} // Updates theme to dark
                        src={assets.moon_icon} // Image source
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                        alt="moon icon"
                    />

                )}

            </button>
        </>
    )
}

// Exporting component
export default ThemeToggleBtn