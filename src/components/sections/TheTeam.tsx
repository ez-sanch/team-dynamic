import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'
import { rowers, supportCrew } from '@/data/crew'

export function TheTeam() {
  const { ref, isInView } = useScrollReveal()
  const { ref: supportRef, isInView: supportVisible } = useScrollReveal()
  const [charlie, aidan] = rowers

  return (
    <section id="team" className="py-section px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">The Team</p>
          <div className="w-8 h-px bg-blue/30 mb-6 mx-auto" />
          <h2 className="font-display text-display-lg text-ink font-light">The Crew</h2>
          <p className="font-body text-ink-muted mt-4 leading-relaxed text-sm">
            We both believe life is meant to be lived to the fullest — not leaving anything to chance, and grabbing every opportunity that comes our way.
          </p>
        </motion.div>

        {/* Rowers — editorial three-column: bio | photo | bio */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center"
        >
          {/* Left bio — Charlie */}
          <motion.article variants={staggerItem} className="space-y-3 lg:text-right">
            <div className="flex items-center justify-between lg:justify-end gap-3">
              <h3 className="font-display text-3xl text-ink font-normal">{charlie.name}</h3>
              {charlie.socialUrl && (
                <a href={charlie.socialUrl} target="_blank" rel="noopener noreferrer"
                  className="text-ink-faint hover:text-blue transition-colors duration-200"
                  aria-label={`${charlie.name} social profile`}>
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              )}
            </div>
            <p className="font-body text-[10px] text-blue/60 uppercase tracking-[0.25em]">{charlie.role}</p>
            <div className="w-8 h-px bg-blue/20 lg:ml-auto" />
            <p className="font-body text-sm text-ink-muted leading-relaxed">{charlie.bio}</p>
          </motion.article>

          {/* Center photo */}
          <motion.div
            variants={staggerItem}
            className="w-64 xl:w-72 mx-auto aspect-[3/4] rounded-sm overflow-hidden border border-white/5 shrink-0"
          >
            <img
              src="/assets/IMG_7482.PNG"
              alt="Aidan and Charlie aboard La Push"
              className="w-full h-full object-cover object-[center_30%]"
            />
          </motion.div>

          {/* Right bio — Aidan */}
          <motion.article variants={staggerItem} className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-3xl text-ink font-normal">{aidan.name}</h3>
              {aidan.socialUrl && (
                <a href={aidan.socialUrl} target="_blank" rel="noopener noreferrer"
                  className="text-ink-faint hover:text-blue transition-colors duration-200"
                  aria-label={`${aidan.name} social profile`}>
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              )}
            </div>
            <p className="font-body text-[10px] text-blue/60 uppercase tracking-[0.25em]">{aidan.role}</p>
            <div className="w-8 h-px bg-blue/20" />
            <p className="font-body text-sm text-ink-muted leading-relaxed">{aidan.bio}</p>
          </motion.article>
        </motion.div>

        {/* Support crew */}
        <motion.div
          ref={supportRef}
          initial="hidden"
          animate={supportVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4">
            <div className="w-8 h-px bg-blue/20" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ink-faint">Shore Team</p>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
            {supportCrew.map((member) => (
              <motion.article key={member.id} variants={staggerItem} className="space-y-2">
                <h3 className="font-display text-2xl text-ink font-normal">{member.name}</h3>
                <p className="font-body text-[10px] text-blue/50 uppercase tracking-[0.25em]">{member.role}</p>
                <div className="w-6 h-px bg-blue/15" />
                <p className="font-body text-sm text-ink-muted leading-relaxed">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
