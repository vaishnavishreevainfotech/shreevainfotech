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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url('/reliable-bg.jpg')",
      }}
    >
      {/* Subtle glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              SHREEVA
            </span>
          </h2>
          <p className="text-base font-medium mx-auto text-white/90">
            Five reasons why leading companies trust us
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative">
          {/* Center decorative blur */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative rounded-2xl px-8 py-10 border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${reason.color} p-0.5 mb-5 transition-transform duration-500 relative z-10 shadow-md group-hover:scale-110`}
                >
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <reason.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
                  {reason.title}
                </h3>
                <p className="text-white/80 leading-relaxed flex-grow relative z-10 text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
