import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useScrollReveal, staggerContainer, staggerItem } from '@/hooks/useScrollReveal'

const CONTENT = {
  eyebrow: 'Mission',
  statement: 'Bringing the next generation of ocean stewards together.',
  lines: [
    'We have dedicated our lives to educating ordinary people to do extraordinary things.',
    'Through this crossing, we want to bring ocean conservation and education to a broader audience.',
  ],
  donate: {
    label: 'Support Our Mission',
    href: '/sponsors',
  },
}

export function Mission() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="mission" className="py-section px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-blue/4 blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="max-w-3xl mx-auto text-center relative z-10 space-y-8"
      >
        <motion.p variants={staggerItem} className="font-body text-[10px] tracking-[0.4em] uppercase text-blue/60">
          {CONTENT.eyebrow}
        </motion.p>

        <motion.div variants={staggerItem} className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-blue/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue/40" />
          <div className="w-12 h-px bg-blue/20" />
        </motion.div>

        <motion.h2
          variants={staggerItem}
          className="font-display text-display-lg text-ink font-light italic leading-snug"
        >
          {CONTENT.statement}
        </motion.h2>

        <motion.div variants={staggerItem} className="space-y-4 max-w-xl mx-auto">
          {CONTENT.lines.map((line, i) => (
            <p key={i} className="font-body text-ink-muted leading-relaxed">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div variants={staggerItem} className="pt-2">
          <a href={CONTENT.donate.href}>
            <Button className="bg-blue text-canvas hover:bg-blue-bright font-body tracking-widest text-xs uppercase px-10 py-6 shadow-blue-glow hover:shadow-blue-glow-lg transition-all duration-300">
              {CONTENT.donate.label}
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
