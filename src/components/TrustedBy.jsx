import React from "react";
import { company_logos } from "../assets/assets"
import { motion } from "motion/react"

/* Inject keyframe once */
const marqueeStyle = `
@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}
.animate-marquee {
  animation: marquee 45s linear infinite;
  display: flex;
  width: max-content;
  will-change: transform;
}
.marquee-container:hover .animate-marquee {
  animation-play-state: paused;
}
`;

const TrustedBy = () => {
    /* Duplicate logos multiple times to ensure the line is wider than any screen */
    const repeatedLogos = [...company_logos, ...company_logos, ...company_logos, ...company_logos];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 text-gray-700 dark:text-white/80 w-full overflow-hidden"
        >
            <style>{marqueeStyle}</style>

            <h3 className="font-semibold text-lg tracking-wide">
                Trusted by Leading Companies
            </h3>

            {/* Marquee track */}
            <div className="marquee-container relative w-full overflow-hidden flex">
                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                {/* Two identical blocks that slide exactly -100% to create a perfect loop */}
                {Array.from({ length: 2 }).map((_, bannerIdx) => (
                    <div
                        key={bannerIdx}
                        className="animate-marquee items-center gap-14 pr-14 shrink-0"
                        aria-hidden={bannerIdx === 1}
                    >
                        {repeatedLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="company logo"
                                className="max-h-5 sm:max-h-6 dark:brightness-125 dark:contrast-125 shrink-0"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default TrustedBy