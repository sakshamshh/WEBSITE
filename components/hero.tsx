"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRef } from "react"

const FloatingParticle = ({ 
  delay, duration, x, y, size, color 
}: { 
  delay: number; duration: number; x: string; y: string; size: number; color: string
}) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
)

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-accent/25 to-chart-4/15 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-chart-3/20 to-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingParticle delay={0} duration={3} x="25%" y="20%" size={8} color="bg-primary" />
        <FloatingParticle delay={0.5} duration={4} x="75%" y="30%" size={6} color="bg-accent" />
        <FloatingParticle delay={1} duration={3.5} x="15%" y="60%" size={10} color="bg-chart-3" />
        <FloatingParticle delay={1.5} duration={5} x="85%" y="50%" size={5} color="bg-chart-4" />
        <FloatingParticle delay={2} duration={4.5} x="50%" y="75%" size={7} color="bg-chart-5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731620_1px,transparent_1px),linear-gradient(to_bottom,#f9731620_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 px-4 py-2 mb-6 sm:mb-8 border border-primary/20"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Innovation</span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground text-balance pb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Building the Future with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
            Intelligent Software
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4"
        >
          Skymlabs builds intelligent software products that solve real-world problems across industries. We are early stage, moving fast, and building for the long term.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base shadow-lg shadow-primary/25">
            <a href="#products">
              Explore Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base border-primary/30 hover:bg-primary/5 hover:border-primary/50">
            <a href="#contact">Talk to Us</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}