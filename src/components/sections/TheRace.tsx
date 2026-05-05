import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const STATS = [
  { value: '3,000', unit: 'miles', label: 'Atlantic crossing distance' },
  { value: '~40', unit: 'days', label: 'Expected race duration' },
  { value: '100%', unit: 'self-funded', label: 'Unsupported — self & community funded' },
  { value: 'Dec', unit: '2028', label: 'Race start, La Gomera, Canary Islands' },
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
  const { ref: photoRef, isInView: photoVisible } = useScrollReveal()

  return (
    <section id="race" className="py-section px-6 bg-canvas">
      <div className="max-w-7xl mx-auto space-y-20">
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

          {/* Stat cards + WTR logo */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* WTR logo + link */}
            <motion.div variants={staggerItem} className="flex items-center justify-between gap-4 pt-2">
              <a
                href="https://www.worldstoughestrow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src="/assets/partners/wtr-logo.png"
                  alt="World's Toughest Row"
                  className="h-14 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>
              <a
                href="https://www.worldstoughestrow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group shrink-0"
              >
                worldstoughestrow.com
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 30 }}
          animate={photoVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/7] rounded-sm overflow-hidden border border-white/5"
        >
          {/* IMAGE: swap for ocean/race promo photo when available */}
          <img
            src="/assets/team/Charlie-and-Aidan.jpg"
            alt="Charlie and Aidan — Team Dynamic rowers"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </motion.div>
      </div>
    </section>
  )
}
