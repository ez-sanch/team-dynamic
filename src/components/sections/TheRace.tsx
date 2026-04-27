import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const STATS = [
  { value: '3,000', unit: 'miles', label: 'Atlantic crossing distance' },
  { value: '~40', unit: 'days', label: 'Expected race duration' },
  { value: '0', unit: 'support', label: 'Fully unsupported, self-sufficient' },
  { value: 'Jan', unit: '2028', label: 'Race start, La Gomera, Canary Islands' },
]

/* COPY: replace body paragraphs with finalized race description */
const COPY = {
  heading: "The World's\nToughest Row",
  intro:
    'The Toughest Row is widely regarded as the most physically and mentally demanding endurance event on earth. 3,000 miles of open Atlantic Ocean, rowed without assistance, from the Canary Islands to Antigua.',
  body:
    'Crews row in shifts around the clock — day and night, through storms and calms — with no crew support vessel, no resupply, and no engine. Everything needed for survival is packed aboard a purpose-built ocean rowing boat.',
  closing:
    'It is not just a race. It is a complete reckoning with the limits of human will, endurance, and trust in your crewmates.',
}

export function TheRace() {
  const { ref: textRef, isInView: textVisible } = useScrollReveal()
  const { ref: cardsRef, isInView: cardsVisible } = useScrollReveal()

  return (
    <section id="race" className="py-section px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Editorial copy */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={staggerItem} className="space-y-4">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60">
                The Race
              </p>
              <div className="w-8 h-px bg-blue/30" />
              <h2 className="font-display text-display-lg text-ink font-light whitespace-pre-line">
                {COPY.heading}
              </h2>
            </motion.div>

            <motion.p variants={staggerItem} className="font-body text-ink-muted leading-relaxed text-base">
              {COPY.intro}
            </motion.p>

            <motion.p variants={staggerItem} className="font-body text-ink-faint leading-relaxed text-sm">
              {COPY.body}
            </motion.p>

            <motion.blockquote
              variants={staggerItem}
              className="font-display italic text-ink/60 text-lg font-light border-l-2 border-blue/30 pl-5"
            >
              {COPY.closing}
            </motion.blockquote>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <Card className="bg-surface border-white/5 hover:border-blue/20 hover:shadow-blue-glow transition-all duration-500 group cursor-default">
                  <CardContent className="p-6 space-y-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl text-blue font-light group-hover:text-blue-bright transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="font-body text-xs text-blue/50 uppercase tracking-widest">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="font-body text-xs text-ink-faint leading-snug">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
