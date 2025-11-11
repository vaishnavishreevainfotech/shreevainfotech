"use client"

import { motion } from "framer-motion"
import { Zap, Users, Lock, TrendingUp, Cpu } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Always available across all communication channels",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with proven track record",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Enterprise-grade protection for your data",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow with us, from startup to enterprise",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Advanced Tech",
      description: "Cutting-edge infrastructure and tools",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <section
      id="why-choose-us"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">SHREEVA</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">Five reasons why leading companies trust us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative">
          {/* Center decorative element */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />

          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                initial={false}
              />
              <div className="relative bg-white rounded-2xl p-8 border border-slate-200 group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                {/* Animated background blur on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                />

                {/* Circular icon background */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} p-0.5 mb-6 group-hover:scale-125 transition-transform duration-500 relative z-10`}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground relative z-10">{reason.title}</h3>
                <p className="text-foreground/70 leading-relaxed flex-grow relative z-10">{reason.description}</p>

                <motion.div
                  className="mt-6 text-primary font-semibold flex items-center gap-2 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn more →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/70 mb-8">Ready to transform your business?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
