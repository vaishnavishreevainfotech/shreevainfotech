"use client"

import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Handshake, CheckCircle, Shield } from "lucide-react"

export default function Values() {
  const values = [
    { icon: Heart, title: "Customer Commitment", desc: "We strive to exceed every expectation through dedication and care." },
    { icon: Handshake, title: "Integrity", desc: "Honesty and transparency are at the heart of everything we do." },
    { icon: Lightbulb, title: "Innovation", desc: "We embrace creativity and continuous improvement." },
    { icon: Users, title: "Teamwork", desc: "Collaboration empowers our success and collective growth." },
    { icon: CheckCircle, title: "Accountability", desc: "We take ownership and deliver results that matter." },
    { icon: Shield, title: "Data Security", desc: "We ensure privacy and protection at every level." },
  ]

  return (
    <section
      id="values"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Soft grid pattern background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Subtle gradient orbs for depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">Our Core <span className="text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Values</span></h2>
          <p className="text-base font-medium leading-relaxed">
            Guiding principles that define who we are and how we deliver value to our clients.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
          </div>
        </motion.div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 "
              >
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 via-emerald-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.1 }}
                    className="w-12 h-12 rounded-xl group-hover:border-white border-1 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-6 h-6 " />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
