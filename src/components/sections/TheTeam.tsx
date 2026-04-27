import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'
import { rowers, supportCrew } from '@/data/crew'
import type { CrewMember } from '@/types'

function MemberCard({ member }: { member: CrewMember }) {
  return (
    <motion.article variants={staggerItem} className="group space-y-4">
      {/* Photo */}
      <div className="aspect-[3/2] rounded-sm overflow-hidden border border-white/5 group-hover:border-blue/20 transition-colors duration-500">
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: member.imagePosition ?? 'center 20%' }}
          />
        ) : (
          <div className="w-full h-full bg-surface-2 flex items-center justify-center">
            <span className="font-body text-[10px] tracking-widest uppercase text-ink-faint/40">Photo coming</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-display text-2xl text-ink font-normal group-hover:text-blue-bright transition-colors duration-300">
          {member.name}
        </h3>
        <p className="font-body text-[10px] text-blue/60 uppercase tracking-[0.25em]">{member.role}</p>
        <div className="w-6 h-px bg-blue/20" />
        <p className="font-body text-sm text-ink-muted leading-relaxed">{member.bio}</p>
      </div>
    </motion.article>
  )
}

export function TheTeam() {
  const { ref, isInView } = useScrollReveal()
  const { ref: supportRef, isInView: supportVisible } = useScrollReveal()

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
          className="max-w-xl"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">The Team</p>
          <div className="w-8 h-px bg-blue/30 mb-6" />
          <h2 className="font-display text-display-lg text-ink font-light">The Crew</h2>
          <p className="font-body text-ink-muted mt-4 leading-relaxed text-sm">
            We both believe life is meant to be lived to the fullest — not leaving anything to chance, and grabbing every opportunity that comes our way.
          </p>
        </motion.div>

        {/* Rowers */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {rowers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* Shore team */}
        <motion.div
          ref={supportRef}
          initial="hidden"
          animate={supportVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4">
            <div className="w-8 h-px bg-blue/20" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ink-faint">Shore Team</p>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {supportCrew.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
