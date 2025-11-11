"use client"

import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Handshake, CheckCircle, Shield } from "lucide-react"

export default function Values() {
  const values = [
    { icon: Heart, title: "Customer Commitment", desc: "Exceeding expectations" },
    { icon: Handshake, title: "Integrity", desc: "Honest communication" },
    { icon: Lightbulb, title: "Innovation", desc: "Continuous improvement" },
    { icon: Users, title: "Teamwork", desc: "Collaboration at all levels" },
    { icon: CheckCircle, title: "Accountability", desc: "Ownership matters" },
    { icon: Shield, title: "Data Security", desc: "Protection first" },
  ]

  return (
    <section
      id="values"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Our Core Values</h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full" />
            <div className="h-1 w-8 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.1 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-125 transition-transform"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{value.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
