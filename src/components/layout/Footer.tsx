import { Globe, AtSign, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
/* ICONS: Globe = Instagram placeholder, AtSign = Twitter/X placeholder.
   Replace with branded SVGs once social accounts are confirmed. */

const NAV_LINKS = [
  { label: 'The Race', to: '/race' },
  { label: 'The Team', to: '/team' },
  { label: 'Mission',  to: '/mission' },
  { label: 'Sponsors', to: '/sponsors' },
]

const SOCIAL_LINKS = [
  { icon: Globe,   label: 'Instagram',  href: '#' /* SOCIAL: replace with real Instagram URL */ },
  { icon: AtSign,  label: 'Twitter / X', href: '#' /* SOCIAL: replace with real Twitter/X URL */ },
  { icon: Mail,    label: 'Email',       href: 'mailto:hello@teamdynamic.com' /* CONTACT: replace email */ },
]

export function Footer() {
  const { ref, isInView } = useScrollReveal({ amount: 0.1 })

  return (
    <footer id="contact" className="bg-canvas font-body border-t border-white/8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <div className="space-y-3">
          <Link to="/" className="inline-block">
            <p className="text-ink text-sm tracking-[0.2em] uppercase font-display font-normal hover:text-blue transition-colors duration-200">
              Team Dynamic
            </p>
          </Link>
          <p className="text-[11px] tracking-widest uppercase text-ink-muted">
            La Push · Toughest Row 2028
          </p>
          <div className="w-6 h-px bg-blue/30 mt-4" />
        </div>

        {/* Nav links */}
        <nav>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink-muted hover:text-blue transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="space-y-4">
          <p className="text-[11px] tracking-widest uppercase text-ink-muted">Follow the journey</p>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-ink-muted hover:text-blue transition-colors duration-200"
              >
                <Icon size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="border-t border-white/8 max-w-7xl mx-auto px-6 py-6">
        <p className="text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Team Dynamic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
