"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const services = [
    "Inbound & Outbound Call Center Services",
    "Back-Office & Data Entry Operations",
    "e-KYC & Document Verification Support",
    "Customer Engagement & Retention Programs",
    "Workflow Outsourcing for Enterprises",
  ]

  return (
    <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
        <img
          src="/modern-office-team-collaboration-meeting-business.jpg"
          alt="Background"
          className="absolute -top-35 -left-75 w-[600px] h-[500px] object-cover opacity-30 blur-sm transform rotate-12 scale-110"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content with diagonal layout */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold leading-tight mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Who We <span className="text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Are</span>
              </motion.h2>
              <p className="text-base text-blue-900 py-1 font-bold leading-relaxed">
            SHREEVA INFO TECH SOLUTIONS PVT LTD. 
              </p>

               <p className="text-base mt-5 font-medium leading-relaxed">
             WE ARE IN TO next
generation BPO and IT-enabled service provider. We deliver excellence in customer 
engagement, back-office operations, and data-driven outsourcing solutions. Our goal is to 
empower businesses through efficiency, innovation, and smart process management
              </p>
            </div>

            {/* <div className="space-y-4 pt-4 border-t border-primary/20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm  group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Right - Large image with frames */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-96"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-accent/15 rounded-xl blur-lg" />
            <img
              src="/office-workspace-organized-team-working.jpg"
              alt="SHREEVA Team"
              className="relative w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
