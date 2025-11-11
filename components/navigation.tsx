"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
                isScrolled ? "w-[120px]" : "w-[160px]"
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
            className={`md:hidden transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden pb-4 space-y-2 ${
              isScrolled
                ? "bg-white/70 backdrop-blur-md shadow-md rounded-b-xl"
                : "bg-transparent"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
