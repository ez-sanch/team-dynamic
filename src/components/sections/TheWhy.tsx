import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const CONTENT = {
  eyebrow: 'The Why',
  quote: 'Great things are not done by great people. Great things are done every day by ordinary people.',
  body: 'We are doing this row to inspire anyone who wants to take a leap into the unknown — whether they take their first breaths underwater or sail under a million stars. We were once those people, and our lives have been transformed through our blue planet.',
  cause:
    'We have dedicated our lives to educating ordinary people to do extraordinary things. Through this crossing, we want to bring ocean conservation and education to a broader audience — bringing the next generation of ocean stewards together.',
  cta: 'Get Involved',
  ctaHref: '#contact',
}

export function TheWhy() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section
      id="why"
      className="py-section px-6 bg-canvas relative overflow-hidden"
    >
      {/* Large background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-blue/4 blur-[100px]" />
      </div>

      {/* Top/bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/15 to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="max-w-2xl mx-auto text-center space-y-8 relative z-10"
      >
        {/* Eyebrow */}
        <motion.p
          variants={staggerItem}
          className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/50"
        >
          {CONTENT.eyebrow}
        </motion.p>

        {/* Divider */}
        <motion.div variants={staggerItem} className="flex items-center gap-4 justify-center">
          <div className="w-12 h-px bg-blue/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue/40" />
          <div className="w-12 h-px bg-blue/20" />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={staggerItem}
          className="font-display text-display-md text-ink font-light italic leading-snug"
        >
          "{CONTENT.quote}"
        </motion.blockquote>

        {/* Body */}
        <motion.p variants={staggerItem} className="font-body text-ink-muted leading-relaxed">
          {CONTENT.body}
        </motion.p>

        {/* Cause */}
        <motion.p variants={staggerItem} className="font-body text-ink-faint text-sm leading-relaxed italic">
          {CONTENT.cause}
        </motion.p>

        {/* CTA */}
        <motion.div variants={staggerItem}>
          <a href={CONTENT.ctaHref}>
            <Button
              variant="outline"
              className="border-blue/20 text-blue bg-transparent hover:bg-blue/5 hover:border-blue/40 font-body tracking-widest text-xs uppercase px-8 py-6 transition-all duration-300"
            >
              {CONTENT.cta}
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
