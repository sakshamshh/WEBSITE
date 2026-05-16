"use client"

import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const reasons = [
  {
    number: "01",
    title: "Deep Domain Expertise",
    description: "Our team brings specialized experience in AI, computer vision, and intelligent systems. We understand the domains we build for — deeply.",
  },
  {
    number: "02",
    title: "Production-Grade Quality",
    description: "We don't just build prototypes. Every solution is engineered for reliability, security, and real-world performance at scale.",
  },
  {
    number: "03",
    title: "Transparent Partnership",
    description: "Clear communication, honest timelines, and collaborative problem-solving. We succeed when you succeed.",
  },
  {
    number: "04",
    title: "Rapid Iteration",
    description: "Agile development with continuous feedback loops ensures we deliver value quickly and adapt to your evolving needs.",
  },
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightX = useTransform(mouseX, (val) => `${val}px`)
  const spotlightY = useTransform(mouseY, (val) => `${val}px`)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(249,115,22,0.1), transparent 40%)`,
        }}
      />
      <div className="relative flex items-start gap-6">
        <motion.span
          className="text-5xl font-bold bg-gradient-to-br from-primary/30 to-accent/20 bg-clip-text text-transparent"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          {reason.number}
        </motion.span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-chart-3"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05)_0%,transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Skymlabs?
            </motion.span>
          </motion.h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We&apos;re not just another tech vendor. Here&apos;s what sets us apart.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.number} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}