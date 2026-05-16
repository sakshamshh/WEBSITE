"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Store, TrafficCone, ArrowUpRight } from "lucide-react"

const products = [
  {
    icon: Store,
    title: "Auris",
    description:
      "Auris turns your existing CCTV cameras into a powerful retail intelligence engine — no new hardware required. It watches your camera feeds, generates real-time footfall heatmaps, tracks dwell time across every zone, and delivers AI-powered daily reports straight to WhatsApp. All processing happens on-premise — footage never leaves your building.",
    features: [
      "Connects to your existing camera infrastructure",
      "Real-time footfall heatmaps across every store zone",
      "Dwell time tracking per area",
      "Cloud-synced dashboard with daily AI reports to WhatsApp",
    ],
    color: "from-primary to-accent",
    bgGlow: "bg-primary/20",
    comingSoon: false,
  },
  {
    icon: TrafficCone,
    title: "TrafficIQ",
    description:
      "AI-powered traffic signal management that reduces congestion, optimises signal timing in real time, and prioritises emergency vehicles — making cities move smarter. Patent filed.",
    features: [],
    color: "from-accent to-chart-3",
    bgGlow: "bg-accent/20",
    comingSoon: true,
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 200 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((event.clientX - centerX) / rect.width)
    y.set((event.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative group"
    >
      <motion.div
        className={`absolute inset-0 ${product.bgGlow} rounded-2xl blur-2xl`}
        animate={{ opacity: isHovered ? 0.6 : 0, scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors duration-300">
        {product.comingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent/20 to-chart-3/20 text-accent border border-accent/30">
              Coming Soon
            </span>
          </div>
        )}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0`}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative p-8">
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <product.icon className="w-7 h-7 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          {product.features && product.features.length > 0 && (
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-0.5">&#10003;</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}
          {!product.comingSoon && (
            <motion.div
              className="mt-6 inline-flex items-center gap-2 text-primary font-medium text-sm cursor-pointer"
              whileHover={{ x: 5 }}
            >
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
          animate={{ x: isHovered ? "200%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" className="py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Products
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-pretty"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful AI solutions designed to transform industries and deliver measurable results.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: 1000 }}>
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}