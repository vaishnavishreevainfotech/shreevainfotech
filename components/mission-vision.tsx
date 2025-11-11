"use client"

import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      {/* Decorative gradient light */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Mission <span className="text-emerald-400">&</span> Vision
          </h2>
          <p className="text-white mt-4  text-base font-medium mx-auto">
            Driving innovation, integrity, and impact — shaping the future of technology-enabled excellence.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <div className="h-1 w-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden shadow-xl transition-all duration-500 "
          >
            {/* Gradient glow overlay */}
            <div className="absolute inset-0 opacity-0  transition-opacity duration-700 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent" />

            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30  transition-transform duration-300">
                  <Eye className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>

              <p className="text-white/80 leading-relaxed">
                To be a globally recognized leader in business process and IT-enabled services —  
                redefining operational excellence through innovation, technology, and customer success.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden shadow-xl transition-all duration-500 "
          >
            {/* Gradient glow overlay */}
            <div className="absolute inset-0 opacity-0  transition-opacity duration-700 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-transparent" />

            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30  transition-transform duration-300">
                  <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>

              <p className="text-white/80 leading-relaxed">
                To deliver innovative, high-quality, and scalable outsourcing solutions  
                that empower businesses to focus on what truly matters — growth, excellence, and impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
