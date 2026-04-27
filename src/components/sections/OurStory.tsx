import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const PROFILES = [
  {
    name: 'Charlie',
    age: '22',
    title: 'A Sailor.',
    body: 'Sun kissed and wind weathered, Charlie is a pure bred son of exploration and expedition. A sailing instructor with 30,000 nm of experience, driven to teach and inspire the next generation about his hardy blue home.',
  },
  {
    name: 'Aidan',
    age: '24',
    title: 'A Diver.',
    body: 'A man of mechanical gills and child of Neptune. Blue all the way through. A diving instructor with hundreds of dives, driven to give the next generation a chance to experience his hardy blue home.',
  },
]

const NARRATIVE = [
  'Our paths crossed at the start of 2025, the two of us linked by our careers but pulled together by our passions. We\'ve decided to dedicate our journey on this row to marine education through an organization we are yet to announce.',
  'As two boys born by the sea, we are bound to it — stewards in education of the deep blue to our next generation. You aren\'t just sponsoring our row. You are sponsoring the future of our planet.',
]

export function OurStory() {
  const { ref: headerRef, isInView: headerVisible } = useScrollReveal()
  const { ref: profilesRef, isInView: profilesVisible } = useScrollReveal()
  const { ref: narrativeRef, isInView: narrativeVisible } = useScrollReveal()

  return (
    <section id="story" className="py-section px-6 bg-canvas relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">Our Story</p>
          <div className="w-8 h-px bg-blue/30 mb-6" />
          <h2 className="font-display text-display-lg text-ink font-light">Here is our story.</h2>
        </motion.div>

        {/* Individual profiles */}
        <motion.div
          ref={profilesRef}
          initial="hidden"
          animate={profilesVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {PROFILES.map((p) => (
            <motion.div key={p.name} variants={staggerItem} className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-display-md text-ink font-light italic">{p.name}</span>
                <span className="font-body text-xs text-blue/50 tracking-widest uppercase">{p.age}</span>
              </div>
              <p className="font-display italic text-blue text-xl font-light">{p.title}</p>
              <div className="w-8 h-px bg-blue/20" />
              <p className="font-body text-sm text-ink-muted leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting narrative */}
        <motion.div
          ref={narrativeRef}
          initial="hidden"
          animate={narrativeVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-2xl space-y-6 border-l-2 border-blue/20 pl-8"
        >
          {NARRATIVE.map((para, i) => (
            <motion.p key={i} variants={staggerItem} className="font-body text-ink-muted leading-relaxed">
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
