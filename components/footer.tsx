"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-background via-background to-primary/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg tracking-wide">SHREEVA</span>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Next-generation BPO and IT solutions empowering businesses worldwide.
            </p>

            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} className="text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <div className="space-y-2">
              {["About Us", "Our Values", "Careers", "Blog", "Contact", "Privacy Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-foreground/60 hover:text-primary transition-colors text-sm leading-relaxed"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <a
                href="tel:+918080808080"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +91 80 XXXX XXXX
              </a>
              <a
                href="mailto:hello@shreeva.in"
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                hello@shreeva.in
              </a>
              <div className="flex items-start gap-3 text-foreground/60 pt-1">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-foreground/60 text-sm"
        >
          <p className="text-center sm:text-left">
            © {currentYear} SHREEVA INFO TECH SOLUTIONS PVT LTD. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
