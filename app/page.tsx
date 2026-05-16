import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { WhyUs } from "@/components/why-us"
import { Industries } from "@/components/industries"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}
