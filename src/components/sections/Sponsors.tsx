import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'
import type { SponsorLogo, SponsorTier } from '@/types'

interface SponsorsProps {
  currentSponsors: SponsorLogo[]
  tiers: SponsorTier[]
}

function LargeTierCard({ tier }: { tier: SponsorTier }) {
  const mailHref = `mailto:hello@teamdynamic.com?subject=${encodeURIComponent(tier.contactSubject ?? tier.name)}`

  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className={`flex flex-col h-full transition-all duration-500 ${
        tier.featured
          ? 'bg-surface border-blue/30 shadow-blue-glow hover:shadow-blue-glow-lg hover:border-blue/50'
          : 'bg-surface border-white/5 hover:border-blue/15'
      }`}>
        <CardHeader className="pb-2 space-y-2">
          {tier.featured && (
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-blue/60">Primary tier</p>
          )}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3 className={`font-display text-2xl font-light ${tier.featured ? 'text-blue' : 'text-ink'}`}>
              {tier.name}
            </h3>
            <span className="font-body text-xs text-ink-muted bg-white/5 px-3 py-1 rounded-sm shrink-0">
              {tier.priceRange}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between gap-6 pt-4">
          <ul className="space-y-2.5">
            {tier.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-muted font-body">
                <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-blue/60' : 'text-ink-faint'}`}>—</span>
                {b}
              </li>
            ))}
          </ul>

          <a href={mailHref}>
            <Button className={`w-full font-body tracking-widest text-xs uppercase py-5 transition-all duration-300 ${
              tier.featured
                ? 'bg-blue text-canvas hover:bg-blue-bright shadow-blue-glow'
                : 'bg-transparent border border-white/10 text-ink-muted hover:border-blue/30 hover:text-blue hover:bg-blue/5'
            }`}>
              Enquire
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SmallTierCard({ tier }: { tier: SponsorTier }) {
  const mailHref = `mailto:hello@teamdynamic.com?subject=${encodeURIComponent(tier.contactSubject ?? tier.name)}`

  return (
    <motion.div variants={staggerItem}>
      <Card className="bg-surface border-white/5 hover:border-blue/15 transition-all duration-500 flex flex-col h-full">
        <CardContent className="p-6 flex flex-col h-full gap-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="font-display text-xl text-ink font-light">{tier.name}</h3>
            <span className="font-body text-[10px] text-ink-faint bg-white/5 px-2 py-0.5 rounded-sm shrink-0">
              {tier.priceRange}
            </span>
          </div>

          <ul className="space-y-1.5 flex-1">
            {tier.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-ink-faint font-body">
                <span className="text-ink-faint/40 mt-0.5 shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>

          <a href={mailHref}>
            <Button className="w-full bg-transparent border border-white/10 text-ink-muted hover:border-blue/30 hover:text-blue hover:bg-blue/5 font-body tracking-widest text-xs uppercase py-4 transition-all duration-300">
              Enquire
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Sponsors({ currentSponsors, tiers }: SponsorsProps) {
  const { ref: headerRef, isInView: headerVisible } = useScrollReveal()
  const { ref: largeTiersRef, isInView: largeTiersVisible } = useScrollReveal()
  const { ref: smallTiersRef, isInView: smallTiersVisible } = useScrollReveal()

  const largeTiers = tiers.filter(t => t.size === 'large')
  const smallTiers = tiers.filter(t => t.size === 'small')

  return (
    <section id="sponsors" className="py-section px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20">

        {/* Founding sponsor link */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-white/5 rounded-sm px-6 py-5 bg-canvas hover:border-blue/20 transition-colors duration-300"
        >
          <div className="flex items-center gap-6">
            <img
              src="/assets/partners/tellus-logo.webp"
              alt="Tellus Outdoor"
              className="h-6 object-contain opacity-70"
            />
            <div className="w-px h-6 bg-white/10" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-ink-faint">Founding Sponsor</p>
          </div>
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 font-body text-sm text-blue hover:text-blue-bright transition-colors duration-200 group"
          >
            View partners
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Header */}
        <div className="max-w-xl">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">Partner with Us</p>
          <div className="w-8 h-px bg-blue/30 mb-6" />
          <h2 className="font-display text-display-lg text-ink font-light">
            Become Part<br />of the Voyage
          </h2>
          <p className="font-body text-ink-muted mt-4 leading-relaxed text-sm">
            Align your brand with one of the most extraordinary human endurance achievements of 2028. Sponsoring Team Dynamic puts your name alongside a story that will be told long after the finish line.
          </p>
        </div>

        {/* Large tiers — Ocean Steward + Blue Horizon */}
        <motion.div
          ref={largeTiersRef}
          initial="hidden"
          animate={largeTiersVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {largeTiers.map(tier => (
            <LargeTierCard key={tier.id} tier={tier} />
          ))}
        </motion.div>

        {/* Small tiers — Tidal Impact, Current Crew, Voyage Supporters */}
        <motion.div
          ref={smallTiersRef}
          initial="hidden"
          animate={smallTiersVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {smallTiers.map(tier => (
            <SmallTierCard key={tier.id} tier={tier} />
          ))}
        </motion.div>

        {/* Current sponsors grid — shown when populated */}
        {currentSponsors.length > 0 && (
          <div className="space-y-10">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">Current Sponsors</p>
              <div className="w-8 h-px bg-blue/30" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentSponsors.map((s) => (
                <div key={s.id} className="aspect-video bg-canvas border border-dashed border-blue/15 rounded-sm flex items-center justify-center">
                  {s.logoSrc
                    ? <img src={s.logoSrc} alt={s.name} className="max-h-10 max-w-[120px] object-contain opacity-60" />
                    : <span className="font-body text-xs text-blue/20 uppercase tracking-widest">{s.name}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
