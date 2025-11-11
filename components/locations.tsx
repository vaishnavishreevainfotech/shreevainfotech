"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Locations() {
  const [activeTab, setActiveTab] = useState(0)

  const offices = [
    {
      city: "Bangalore",
      region: "Head Office",
      phone: "+91 (80) XXXX XXXX",
      email: "bangalore@shreeva.in",
      image: "/modern-office-team-collaboration-meeting-business.jpg",
      description: "Our innovation hub and primary headquarters driving excellence.",
    },
    {
      city: "Chennai",
      region: "Operations Hub",
      phone: "+91 (44) XXXX XXXX",
      email: "chennai@shreeva.in",
      image: "/office-workspace-organized-team-working.jpg",
      description: "Strategic operations center serving South India region.",
    },
    {
      city: "Tirupati",
      region: "Support Center",
      phone: "+91 (877) XXXX XXXX",
      email: "tirupati@shreeva.in",
      image: "/call-center-headphones-team-customer-service.jpg",
      description: "Customer support and service excellence hub.",
    },
  ]

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[90%] h-96 bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Find Us{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">
              Anywhere
            </span>
          </h2>
          <p className="text-base text-gray-600 font-medium">
            Three strategic locations ready to serve your needs.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 justify-center lg:justify-start">
          {offices.map((office, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === index
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {office.city}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-stretch"
        >
          {/* Image */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden group shadow-md hover:shadow-lg transition-all duration-500">
            <img
              src={offices[activeTab].image || "/placeholder.svg"}
              alt={offices[activeTab].city}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white/80 text-sm font-medium">{offices[activeTab].region}</p>
            </div>
          </div>

          {/* Details */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
                {offices[activeTab].city}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                {offices[activeTab].description}
              </p>
            </div>

            <div className="space-y-5 pt-8 border-t border-gray-200">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: offices[activeTab].phone,
                  link: `tel:${offices[activeTab].phone}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: offices[activeTab].email,
                  link: `mailto:${offices[activeTab].email}`,
                },
                { icon: MapPin, label: "Location", value: "Get Directions", link: "#" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={idx}
                    href={item.link}
                    className="group flex items-center gap-4 text-gray-800 hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ x: 6 }}
                  >
                    <div className="p-4 rounded-xl bg-gray-100 group-hover:bg-primary/10 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="font-semibold text-base group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
