"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Stats() {
  const stats = [
    { value: "5000+", label: "Associates Connected", subtitle: "to meaningful work" },
    { value: "3", label: "Offices Across India", subtitle: "Bangalore, Chennai, Tirupati" },
    { value: "18+", label: "Enterprise Clients", subtitle: "trusting our expertise" },
    { value: "83+", label: "Team Members", subtitle: "driving excellence" },
  ]

  return (
    <section id="stats" className="py-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-3"
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text">Impact</span>
          </h2>
          <p className="text-base font-medium max-w-2xl">
            Building tomorrow's workforce today with innovation and excellence
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-12 gap-6 h-auto lg:h-[500px]">
          {/* Large Featured Stat - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 lg:col-span-7 relative group rounded-2xl overflow-hidden h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent pointer-events-none z-20" />
            <Image
              src="/diverse-team-collaboration.png"
              alt="Team impact"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 p-8 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
                <p className="text-6xl lg:text-7xl font-bold text-white mb-2">{stats[0].value}</p>
                <p className="text-lg lg:text-xl text-white font-semibold">{stats[0].label}</p>
                <p className="text-white/80 text-sm">{stats[0].subtitle}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Stacked Stats */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 group relative rounded-xl overflow-hidden"
            >
              <Image
                src="/office-building-architecture-modern.jpg"
                alt="Offices"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 to-cyan-600/50 group-hover:from-emerald-500/40 group-hover:to-cyan-500/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-black/30 z-5" />

              <div className="absolute inset-0 flex flex-col justify-center items-start p-6 z-10">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-1">{stats[1].value}</p>
                <p className="text-white font-semibold">{stats[1].label}</p>
                <p className="text-white/80 text-sm">{stats[1].subtitle}</p>
              </div>
            </motion.div>

            {/* Bottom Row - Two Stats Side by Side */}
            <div className="flex gap-4">
              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 group relative rounded-xl overflow-hidden h-64"
              >
                <Image
                  src="/business-professionals-handshake-partnership.jpg"
                  alt="Clients"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/50 to-blue-600/50 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-colors duration-500" />
                <div className="absolute inset-0 bg-black/30 z-5" />

                <div className="absolute inset-0 flex flex-col justify-center items-start p-5 z-10">
                  <p className="text-3xl font-bold text-white mb-1">{stats[2].value}</p>
                  <p className="text-white font-semibold text-sm">{stats[2].label}</p>
                  <p className="text-white/80 text-xs">{stats[2].subtitle}</p>
                </div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-1 group relative rounded-xl overflow-hidden h-64 bg-gradient-to-br from-amber-400 to-orange-500"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative h-full flex flex-col justify-center items-start p-5 z-10">
                  <p className="text-3xl font-bold text-white mb-1">{stats[3].value}</p>
                  <p className="text-white font-semibold text-sm">{stats[3].label}</p>
                  <p className="text-white/80 text-xs">{stats[3].subtitle}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
