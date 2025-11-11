"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-background via-background to-primary/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">SHREEVA</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Next-generation BPO and IT solutions empowering businesses worldwide.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} className="text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Services</h4>
            {[
              "Call Centre",
              "Data Management",
              "Back Office",
              "IT Services",
              "e-KYC Support",
              "Customer Engagement",
            ].map((item) => (
              <a key={item} href="#" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
                {item}
              </a>
            ))}
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Company</h4>
            {["About Us", "Our Values", "Careers", "Blog", "Contact", "Privacy Policy"].map((item) => (
              <a key={item} href="#" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
                {item}
              </a>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+918080808080"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                +91 80 XXXX XXXX
              </a>
              <a
                href="mailto:hello@shreeva.in"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                hello@shreeva.in
              </a>
              <div className="flex items-start gap-2 text-foreground/60 text-sm pt-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-foreground/60 text-sm"
        >
          <p>© {currentYear} SHREEVA INFO TECH SOLUTIONS PVT LTD. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Security
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
