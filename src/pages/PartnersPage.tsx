import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const TELLUS = {
  name: 'Tellus Outdoor',
  url: 'https://tellusoutdoor.com',
  logo: '/assets/partners/tellus-logo.webp',
  tier: 'Founding Sponsor',
  tagline: 'First in the water with us.',
  story: [
    'Tellus Outdoor was the first to believe in Team Dynamic — before the boat, before the campaign, before anything was certain. They came in with funding, gear, and hands-on help shaping our strategy and storytelling from the very beginning.',
    'Their support didn\'t just help us get off the ground. It gave us the confidence to commit fully to this crossing and the credibility to bring others along with us.',
    'We row with Tellus on our backs — literally and figuratively.',
  ],
}

export function PartnersPage() {
  const { ref, isInView } = useScrollReveal()
  const { ref: ctaRef, isInView: ctaVisible } = useScrollReveal()

  return (
    <div className="bg-canvas min-h-screen">
      {/* Header */}
      <section className="py-section px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">Partners</p>
            <div className="w-8 h-px bg-blue/30 mb-6" />
            <h1 className="font-display text-display-lg text-ink font-light">
              The people behind<br />the crossing.
            </h1>
            <p className="font-body text-ink-muted mt-4 leading-relaxed text-sm max-w-xl">
              These are the brands and organisations that made this possible — aligned with our mission, committed to the voyage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding sponsor — Tellus */}
      <section className="py-section px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Tier label */}
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="w-8 h-px bg-blue/20" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/50">
                {TELLUS.tier}
              </p>
              <div className="flex-1 h-px bg-white/5" />
            </motion.div>

            {/* Main card */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Logo block */}
              <div className="space-y-6">
                <div className="bg-surface border border-white/5 rounded-sm p-10 flex items-center justify-center aspect-[16/9]">
                  <img
                    src={TELLUS.logo}
                    alt={TELLUS.name}
                    className="max-h-16 max-w-[220px] object-contain"
                  />
                </div>
                <a
                  href={TELLUS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group"
                >
                  {TELLUS.url.replace('https://', '')}
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* Story */}
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-3xl text-ink font-light">{TELLUS.name}</h2>
                  <p className="font-display italic text-blue text-lg font-light mt-1">{TELLUS.tagline}</p>
                </div>
                <div className="w-8 h-px bg-blue/20" />
                {TELLUS.story.map((para, i) => (
                  <p key={i} className="font-body text-sm text-ink-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="py-section px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full bg-blue/4 blur-[80px]" />
        </div>
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10"
        >
          <div>
            <h3 className="font-display text-display-md text-ink font-light">Want to join the voyage?</h3>
            <p className="font-body text-ink-muted text-sm mt-2">
              We're looking for brands that share our belief in the ocean and the next generation.
            </p>
          </div>
          <Link
            to="/sponsors"
            className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group shrink-0"
          >
            View sponsorship tiers
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
