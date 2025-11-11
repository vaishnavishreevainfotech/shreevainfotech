"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Stats from "@/components/stats"
import Services from "@/components/services"
import MissionVision from "@/components/mission-vision"
import Values from "@/components/values"
import WhyChooseUs from "@/components/why-choose-us"
import Locations from "@/components/locations"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-accent/5 min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Services />
      <MissionVision />
      <Values />
      <WhyChooseUs />
      <Locations />
      <CTA />
      <Footer />
    </main>
  )
}
