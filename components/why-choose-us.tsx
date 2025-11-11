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
      className="py-22 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden relative"
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
          className="mb-12 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">SHREEVA</span>
          </h2>
          <p className="text-base font-medium mx-auto">Five reasons why leading companies trust us</p>
        </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative">
  {/* Center decorative element */}
  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

  {reasons.map((reason, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0  transition-opacity duration-500 blur-md"
        initial={false}
      />
      <div className="relative bg-white rounded-2xl px-8 py-10 border border-slate-200  transition-all duration-500 h-full flex flex-col shadow-sm backdrop-blur-sm">
        {/* Icon circle */}
        <div
          className={`w-14 h-14 rounded-xl ${reason.color} p-0.5 mb-5  transition-transform duration-500 relative z-10 shadow-sm`}
        >
          <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
            <reason.icon className="w-7 h-7 text-foreground" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-foreground relative z-10">{reason.title}</h3>
        <p className="text-foreground/70 leading-relaxed flex-grow relative z-10 text-sm">{reason.description}</p>

       
      </div>
    </motion.div>
  ))}
</div>


      </div>
    </section>
  )
}
