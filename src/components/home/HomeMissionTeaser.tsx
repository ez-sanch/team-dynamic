import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

export function HomeMissionTeaser() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="py-section px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full bg-blue/4 blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center relative z-10 space-y-8"
      >
        <motion.div variants={staggerItem}>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">Mission</p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-blue/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue/40" />
            <div className="w-12 h-px bg-blue/20" />
          </div>
        </motion.div>

        <motion.blockquote
          variants={staggerItem}
          className="font-display text-display-md text-ink font-light italic leading-snug"
        >
          "Bringing the next generation of ocean stewards together."
        </motion.blockquote>

        <motion.p variants={staggerItem} className="font-body text-ink-muted leading-relaxed">
          Great things are not done by great people. They are done every day by ordinary people with extraordinary conviction.
        </motion.p>

        <motion.div variants={staggerItem}>
          <Link
            to="/mission"
            className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group"
          >
            Our mission
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
