import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'
import type { SponsorLogo, SponsorTier } from '@/types'

interface SponsorsProps {
  currentSponsors: SponsorLogo[]
  tiers: SponsorTier[]
}

function SponsorLogoCard({ sponsor }: { sponsor: SponsorLogo }) {
  const inner = sponsor.logoSrc ? (
    /* IMAGE: replace once logo is provided */
    <img
      src={sponsor.logoSrc}
      alt={sponsor.name}
      className="max-h-10 max-w-[120px] object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
    />
  ) : (
    /* LOGO: replace with <img> once sponsor provides logo asset */
    <span className="font-body text-xs text-blue/20 uppercase tracking-widest text-center px-2">
      {sponsor.name}
    </span>
  )

  const content = (
    <div className="aspect-video bg-surface border border-white/5 hover:border-blue/15 rounded-sm flex items-center justify-center transition-all duration-300 hover:shadow-blue-glow">
      {inner}
    </div>
  )

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={sponsor.name}>
      {content}
    </a>
  ) : (
    <div>{content}</div>
  )
}

function TierCard({ tier }: { tier: SponsorTier }) {
  const subject = tier.contactSubject ?? `Sponsorship Enquiry — ${tier.name}`
  const mailHref = `mailto:hello@teamdynamic.com?subject=${encodeURIComponent(subject)}`
  /* CONTACT: replace hello@teamdynamic.com with real contact email */

  return (
    <motion.div variants={staggerItem}>
      <Card
        className={`flex flex-col h-full transition-all duration-500 ${
          tier.featured
            ? 'bg-surface border-blue/30 shadow-blue-glow hover:shadow-blue-glow-lg hover:border-blue/50'
            : 'bg-surface border-white/5 hover:border-blue/15 hover:shadow-card-dark'
        }`}
      >
        <CardHeader className="pb-2 space-y-1">
          {tier.featured && (
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-blue/60 mb-1">
              Most popular
            </p>
          )}
          <h3 className={`font-display text-2xl font-light ${tier.featured ? 'text-blue' : 'text-ink'}`}>
            {tier.name}
          </h3>
          <p className="font-body text-sm text-ink-muted">{tier.tagline}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between gap-6 pt-4">
          <ul className="space-y-2.5">
            {tier.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-muted font-body">
                <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-blue/60' : 'text-ink-faint'}`}>—</span>
                {benefit}
              </li>
            ))}
          </ul>

          <a href={mailHref}>
            <Button
              className={`w-full font-body tracking-widest text-xs uppercase py-5 transition-all duration-300 ${
                tier.featured
                  ? 'bg-blue text-canvas hover:bg-blue-bright shadow-blue-glow hover:shadow-blue-glow-lg'
                  : 'bg-transparent border border-white/10 text-ink-muted hover:border-blue/30 hover:text-blue hover:bg-blue/5'
              }`}
            >
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
  const { ref: tiersRef, isInView: tiersVisible } = useScrollReveal()

  return (
    <section id="sponsors" className="py-section px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Current sponsors */}
        {currentSponsors.length > 0 && (
          <div className="space-y-10">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">
                Our Sponsors
              </p>
              <div className="w-8 h-px bg-blue/30" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentSponsors.map((s) => (
                <SponsorLogoCard key={s.id} sponsor={s} />
              ))}
            </div>
          </div>
        )}

        {/* Sponsorship tiers */}
        <div className="space-y-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60 mb-3">
              Partner with Us
            </p>
            <div className="w-8 h-px bg-blue/30 mb-6" />
            <h2 className="font-display text-display-lg text-ink font-light">
              {/* COPY: replace with finalized sponsorship headline */}
              Become Part<br />of the Voyage
            </h2>
            <p className="font-body text-ink-muted mt-4 leading-relaxed text-sm">
              {/* COPY: replace with finalized sponsorship pitch */}
              Align your brand with one of the most extraordinary human endurance achievements of 2028. Sponsoring Team Dynamic puts your name alongside a story that will be told long after the finish line.
            </p>
          </motion.div>

          <motion.div
            ref={tiersRef}
            initial="hidden"
            animate={tiersVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {tiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
