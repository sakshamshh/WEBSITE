"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowUpRight, Phone, Instagram } from "lucide-react"

const footerLinks = {
  Products: [
    { name: "Auris", href: "#products" },
    { name: "TrafficIQ", href: "#products" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,rgba(249,115,22,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(236,72,153,0.03)_0%,transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <motion.a
              href="#"
              className="inline-block text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Skymlabs
              </span>
            </motion.a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building intelligent software that transforms industries and creates lasting impact.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@skymlabs.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  contact@skymlabs.com
                </a>
              </li>
              <li>
                <a href="tel:+919818167998" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 98181 67998
                </a>
              </li>
              <li>
                <a href="tel:+918178332368" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 81783 32368
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Founders */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Founders</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-sm font-medium text-foreground">Saksham Sharma</p>
                <p className="text-xs text-muted-foreground mb-1">Founder</p>
                <div className="flex items-center gap-3">
                  <a href="mailto:saksham@skymlabs.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/sakshamsh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </li>
              <li>
                <p className="text-sm font-medium text-foreground">Ayush Ranjan</p>
                <p className="text-xs text-muted-foreground mb-1">Founder</p>
                <div className="flex items-center gap-3">
                  <a href="mailto:ayush@skymlabs.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/_._x__7" target="_blank" rel="noopener noreferrer" className="text-muted-forearding hover:text-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="group text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Skymlabs Pvt Ltd. All rights reserved.
          </p>
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary"
            >
              ♥
            </motion.span>{" "}
            in India
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}