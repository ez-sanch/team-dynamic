import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

export function HomeTeamTeaser() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="py-section px-6 bg-canvas relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <motion.div
            variants={staggerItem}
            className="aspect-[4/3] rounded-sm overflow-hidden border border-white/5"
          >
            <img
              src="/assets/boat/IMG_7482.PNG"
              alt="Aidan and Charlie aboard La Push"
              className="w-full h-full object-cover object-[center_30%] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">The Team</p>
              <div className="w-8 h-px bg-blue/30 mb-6" />
              <h2 className="font-display text-display-lg text-ink font-light">Aidan & Charlie</h2>
            </div>
            <p className="font-body text-ink-muted leading-relaxed text-sm">
              A diver and a sailor — two boys born by the sea, bound to it. Together they will row 3,000 miles across the Atlantic Ocean.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group"
            >
              Meet the crew
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
