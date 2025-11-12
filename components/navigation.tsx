"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = ["About", "Services", "Values", "Locations", "Contact"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
    <motion.nav
      initial={{ backgroundColor: "rgba(255,255,255,0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255,255,255,0.6)"
          : "rgba(255,255,255,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg py-1" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center">
          {/* Logo with scale animation */}
          <motion.div
                      initial={{ opacity: 0, x: -20 }}

            animate={{ scale: isScrolled ? 0.8 : 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            
            <Image
              src="/shreevalogo.png"
              alt="logo"
              width={300}
              height={300}
              className={`transition-all duration-500 ${
                isScrolled ? "w-[120px]" : "w-[140px] lg:w-[160px]"
              }`}
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-gray-900 hover:text-purple-600"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors pe-5 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

  

      </div>
    </motion.nav>
       {/* Mobile Sidebar Menu */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0   z-40"
        onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
      />

      {/* Sidebar itself */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed  top-0 left-0 h-full w-64 z-50 p-6 flex flex-col gap-4 shadow-xl ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md text-gray-900"
            : "bg-gray-900/95 text-white"
        }`}
      >
       

        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-primary/10 transition-colors"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  )
}
