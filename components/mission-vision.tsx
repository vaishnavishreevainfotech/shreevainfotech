"use client"

import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Mission & Vision</h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <div className="h-1 w-8 bg-accent rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <Eye className="w-6 h-6 text-white" strokeWidth={1.5} />
              </motion.div>

              <h3 className="text-2xl font-bold text-orange-900 mb-3">Our Vision</h3>
              <p className="text-orange-800/80 leading-relaxed">
                To be a globally recognized leader in BPO and IT-enabled services through innovation and customer
                satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <Target className="w-6 h-6 text-white" strokeWidth={1.5} />
              </motion.div>

              <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-blue-800/80 leading-relaxed">
                Deliver high-quality, technology-driven outsourcing solutions that empower clients to grow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
