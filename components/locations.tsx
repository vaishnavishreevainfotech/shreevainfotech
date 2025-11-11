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
      description: "Our innovation hub and primary headquarters driving excellence",
    },
    {
      city: "Chennai",
      region: "Operations Hub",
      phone: "+91 (44) XXXX XXXX",
      email: "chennai@shreeva.in",
      image: "/office-workspace-organized-team-working.jpg",
      description: "Strategic operations center serving South India region",
    },
    {
      city: "Tirupati",
      region: "Support Center",
      phone: "+91 (877) XXXX XXXX",
      email: "tirupati@shreeva.in",
      image: "/call-center-headphones-team-customer-service.jpg",
      description: "Customer support and service excellence hub",
    },
  ]

  return (
    <section id="locations" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Find Us <span className="gradient-text">Anywhere</span>
          </h2>
          <p className="text-xl text-foreground/60">Three strategic locations ready to serve your needs</p>
        </motion.div>

        <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
          {offices.map((office, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {office.city}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-stretch"
        >
          {/* Full-height image section */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow">
            <img
              src={offices[activeTab].image || "/placeholder.svg"}
              alt={offices[activeTab].city}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-primary/30 group-hover:from-black/20 transition-all" />
            <motion.div
              className="absolute inset-0 flex items-end p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-white">
                <p className="text-lg font-semibold text-cyan-300">{offices[activeTab].region}</p>
              </div>
            </motion.div>
          </div>

          {/* Details section */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3 className="text-5xl lg:text-6xl font-bold mb-3">{offices[activeTab].city}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">{offices[activeTab].description}</p>
            </div>

            <div className="space-y-5 pt-8 border-t-2 border-gray-200">
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
                    className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{item.label}</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">{item.value}</p>
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
