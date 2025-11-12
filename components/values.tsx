"use client"

import { motion } from "framer-motion"
import { Check, Shield, Zap, Smile, Heart, Rocket } from "lucide-react"

const values = [
  {
    icon: Check,
    title: "Reliable",
    desc: "Our service is built on a foundation of consistency and trust",
  },
  {
    icon: Shield,
    title: "Secure",
    desc: "Your data is protected with enterprise-grade security",
  },
  {
    icon: Zap,
    title: "Fast",
    desc: "Lightning-quick performance for seamless experience",
  },
  {
    icon: Smile,
    title: "Friendly",
    desc: "Intuitive design that everyone can enjoy",
  },
  {
    icon: Heart,
    title: "Passionate",
    desc: "Built with love and attention to detail",
  },
  {
    icon: Rocket,
    title: "Innovative",
    desc: "Constantly pushing boundaries and exploring new possibilities",
  },
]

const getCardStyles = (title: string) => {
  const styles: Record<string, { bg: string; icon: string; title: string; text: string }> = {
    Reliable: { bg: "bg-blue-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
    Secure: { bg: "bg-green-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
    Fast: { bg: "bg-amber-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
    Friendly: { bg: "bg-pink-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
    Passionate: { bg: "bg-red-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
    Innovative: { bg: "bg-purple-600", icon: "bg-white/20 text-white", title: "text-white", text: "text-white/90" },
  }
  return styles[title] || styles["Reliable"]
}

const getBackgroundImage = (title: string) => {
  const images: Record<string, string> = {
    Reliable: "url('/reliable-bg.jpg')",
    Secure: "url('/secure-bg.jpg')",
    Fast: "url('/fast-bg.jpg')",
    Friendly: "url('/friendly-bg.jpg')",
    Passionate: "url('/passionate-bg.jpg')",
    Innovative: "url('/innovative-bg.jpg')",
  }
  return images[title] || images["Reliable"]
}

export default function ValueCards() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            const styles = getCardStyles(value.title)
            const backgroundImage = getBackgroundImage(value.title)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%), ${backgroundImage}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.1 }}
                    className={`w-12 h-12 rounded-xl border border-1 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${styles.icon}`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <h3 className={`text-lg font-semibold mb-2 group-hover:opacity-80 transition-opacity ${styles.title}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm leading-relaxed group-hover:opacity-90 transition-opacity ${styles.text}`}>
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
