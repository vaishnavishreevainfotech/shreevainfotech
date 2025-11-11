"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-96 -left-96 w-full h-full bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-96 -right-96 w-full h-full bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl" />
        <img
          src="/customer-satisfaction-happy-clients-teamwork.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 py-20"
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </motion.h2>

          <motion.p
            className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with SHREEVA to unlock operational excellence and innovative solutions tailored to your enterprise
            needs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="px-10 py-5 border-2 border-primary rounded-full text-foreground font-bold text-lg hover:bg-primary/10 transition-colors duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
