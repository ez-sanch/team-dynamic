import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.9, ease: EASE, delay },
})

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-canvas"
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-blue/4 blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full bg-blue/3 blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-body text-blue/60 tracking-[0.4em] text-xs uppercase mb-8"
          {...fadeUp(0.1)}
        >
          Toughest Row 2028 · Atlantic Ocean
        </motion.p>

        <motion.div
          className="w-16 h-px bg-blue/30 mx-auto mb-8 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        />

        <motion.h1
          className="font-display text-display-xl text-ink font-light leading-none mb-5"
          {...fadeUp(0.35)}
        >
          Team Dynamic
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          {...fadeUp(0.5)}
        >
          <span className="w-8 h-px bg-blue/30" />
          <span className="font-body text-ink/40 tracking-[0.2em] text-xs uppercase">Aboard</span>
          <span className="font-display italic text-blue text-xl font-light">La Push</span>
          <span className="w-8 h-px bg-blue/30" />
        </motion.div>

        <motion.p
          className="font-display text-display-md text-ink/50 italic font-light max-w-xl mx-auto mb-12"
          {...fadeUp(0.65)}
        >
          Ordinary people. Extraordinary ocean. 3,000 miles.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.85 }}
        >
          <Link to="/team">
            <Button
              variant="outline"
              className="border-white/15 text-ink/70 bg-transparent hover:bg-white/5 hover:border-blue/40 hover:text-ink font-body tracking-widest text-xs uppercase px-8 py-6 transition-all duration-300"
            >
              Meet the Crew
            </Button>
          </Link>
          <Link to="/sponsors">
            <Button className="bg-blue text-canvas hover:bg-blue-bright font-body tracking-widest text-xs uppercase px-8 py-6 shadow-blue-glow hover:shadow-blue-glow-lg transition-all duration-300">
              Become a Sponsor
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />
    </section>
  )
}
