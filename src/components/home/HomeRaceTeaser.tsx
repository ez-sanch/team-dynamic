import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const STATS = [
  { value: '3,000', unit: 'miles', label: 'Atlantic crossing' },
  { value: '~40',   unit: 'days',  label: 'Race duration' },
  { value: '0',     unit: 'support', label: 'Unsupported' },
  { value: 'Jan',   unit: '2028',  label: 'Race start' },
]

export function HomeRaceTeaser() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section className="py-section px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">The Race</p>
              <div className="w-8 h-px bg-blue/30 mb-4" />
              <h2 className="font-display text-display-lg text-ink font-light">The World's Toughest Row</h2>
            </div>
            <Link
              to="/race"
              className="flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group"
            >
              The full story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          <motion.div variants={staggerItem} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <Card key={stat.label} className="bg-canvas border-white/5 hover:border-blue/20 hover:shadow-blue-glow transition-all duration-500 group cursor-default">
                <CardContent className="p-6 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl text-blue font-light group-hover:text-blue-bright transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="font-body text-xs text-blue/50 uppercase tracking-widest">{stat.unit}</span>
                  </div>
                  <p className="font-body text-xs text-ink-faint leading-snug">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
