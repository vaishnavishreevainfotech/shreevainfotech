"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Call Centre Solutions",
      description: "24/7 multilingual support with AI-powered routing",
      image: "/call-center-headphones-team-customer-service.jpg",
      tag: "Customer Support",
    },
    {
      title: "Data Management",
      description: "Secure entry and verification with 99.9% accuracy",
      image: "/data-analytics-dashboard-business-intelligence.jpg",
      tag: "Data Services",
    },
    {
      title: "Back-Office Support",
      description: "End-to-end operational excellence",
      image: "/office-workspace-organized-team-working.jpg",
      tag: "Operations",
    },
    {
      title: "IT & Digital Services",
      description: "Modern solutions for digital transformation",
      image: "/technology-servers-computers-digital-infrastructur.jpg",
      tag: "Technology",
    },
    {
      title: "e-KYC & Verification",
      description: "Document verification and compliance",
      image: "/security-digital-identity-verification-documents.jpg",
      tag: "Compliance",
    },
    {
      title: "Customer Engagement",
      description: "Strategic retention programs for loyalty",
      image: "/customer-satisfaction-happy-clients-teamwork.jpg",
      tag: "Engagement",
    },
  ]

  return (
    <section
      id="services"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Services That{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Transform</span>
          </h2>
          <p className="text-base font-medium max-w-2xl">
            Comprehensive solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Top row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, idx) => (
              <ServiceCard key={idx} service={service} delay={idx * 0.1} index={idx} />
            ))}
          </div>

          {/* Middle row - 3 cards centered */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(2, 5).map((service, idx) => (
              <ServiceCard key={idx + 2} service={service} delay={(idx + 2) * 0.1} index={idx + 2} />
            ))}
          </div>

          {/* Bottom row - 1 large card */}
          <div className="max-w-2xl mx-auto">
            <ServiceCard service={services[5]} delay={0.5} index={5} isLarge />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay, index, isLarge = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      <div
        className={`relative ${isLarge ? "h-96" : "h-80"} shadow-xl hover:shadow-2xl transition-shadow duration-500`}
      >
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:rotate-1 group-hover:scale-105"
        />

        {/* Multiple gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        {/* Animated decorative blur circle */}
        <motion.div
          className="absolute -top-12 -right-12 w-40 h-40 bg-accent/40 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Content */}
        <motion.div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="inline-block mb-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="text-xs font-semibold text-white">{service.tag}</span>
          </div>
          <h3
            className={`${isLarge ? "text-3xl" : "text-2xl"} font-bold mb-3 group-hover:text-cyan-300 transition-colors`}
          >
            {service.title}
          </h3>
          <p className="text-white/85 mb-4 text-sm md:text-base leading-relaxed">{service.description}</p>
        
        </motion.div>
      </div>
    </motion.div>
  )
}
