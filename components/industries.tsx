"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Building2, 
  Shield, 
  Truck, 
  Factory, 
  Landmark, 
  HeartPulse, 
  Store, 
  Cog 
} from "lucide-react"

const industries = [
  { name: "Smart Cities", icon: Building2, color: "from-primary to-accent" },
  { name: "Security & Surveillance", icon: Shield, color: "from-accent to-chart-3" },
  { name: "Transport & Logistics", icon: Truck, color: "from-chart-3 to-chart-4" },
  { name: "Infrastructure", icon: Factory, color: "from-chart-4 to-chart-5" },
  { name: "Government", icon: Landmark, color: "from-chart-5 to-primary" },
  { name: "Healthcare", icon: HeartPulse, color: "from-primary to-chart-3" },
  { name: "Retail", icon: Store, color: "from-chart-3 to-accent" },
  { name: "Manufacturing", icon: Cog, color: "from-accent to-chart-4" },
]

function IndustryPill({ 
  industry, 
  index,
  isReversed 
}: { 
  industry: typeof industries[0]
  index: number
  isReversed?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = industry.icon

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      className="relative px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 cursor-default whitespace-nowrap font-medium text-foreground transition-all duration-300 flex items-center gap-2"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${industry.color} blur-lg`}
        animate={{ opacity: isHovered ? 0.3 : 0, scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className={`w-4 h-4 ${isHovered ? "text-primary" : "text-muted-foreground"}`} />
      </motion.div>
      
      <span className="relative">{industry.name}</span>

      {/* Sparkle effect on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </>
      )}
    </motion.div>
  )
}

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="industries" className="py-16 lg:py-20 bg-secondary/30 overflow-hidden relative">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Industries We{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Serve
            </motion.span>
          </motion.h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our AI solutions are designed to meet the unique challenges of
            diverse sectors.
          </p>
        </motion.div>

        {/* Animated Pills */}
        <div className="relative">
          {/* First Row - Scrolling Left */}
          <div className="flex gap-4 mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -50 * industries.length],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...industries, ...industries, ...industries].map((industry, index) => (
                <IndustryPill 
                  key={`${industry.name}-${index}`} 
                  industry={industry} 
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [-50 * industries.length, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...industries.slice().reverse(), ...industries.slice().reverse(), ...industries.slice().reverse()].map(
                (industry, index) => (
                  <IndustryPill 
                    key={`${industry.name}-reverse-${index}`} 
                    industry={industry} 
                    index={index}
                    isReversed
                  />
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "8+", label: "Industries" },
            { value: "50+", label: "Projects Delivered" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
