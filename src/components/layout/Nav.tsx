import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Anchor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { label: 'The Race', to: '/race' },
  { label: 'The Team', to: '/team' },
  { label: 'Mission',  to: '/mission' },
  { label: 'Sponsors', to: '/sponsors' },
]

const CONTACT_EMAIL = 'mailto:hello@teamdynamic.com' /* CONTACT: replace with real email */

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-body text-sm cursor-pointer transition-colors duration-200 tracking-wide relative group ${
    isActive ? 'text-blue' : 'text-ink-muted hover:text-blue'
  }`

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-white/5 shadow-[0_1px_0_rgba(56,189,248,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Anchor size={15} className="text-blue group-hover:text-blue-bright transition-colors duration-300" strokeWidth={1.5} />
          <span className="font-display text-ink text-sm tracking-[0.2em] uppercase font-normal group-hover:text-blue-bright transition-colors duration-300">
            Team Dynamic
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.to + link.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              <NavLink to={link.to} className={navLinkClass} end={link.to === '/'}>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue group-hover:w-full transition-all duration-300" />
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + NAV_LINKS.length * 0.07, duration: 0.4 }}
          >
            <a
              href={CONTACT_EMAIL}
              className="font-body text-sm text-ink-muted hover:text-blue cursor-pointer transition-colors duration-200 tracking-wide"
            >
              Contact
            </a>
          </motion.li>
        </ul>

        {/* Mobile nav */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-ink-muted hover:text-blue hover:bg-white/5">
              <Menu size={20} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-canvas border-l border-white/5 w-[240px] pt-16">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-ink-faint hover:text-blue hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              <X size={18} />
            </Button>
            <AnimatePresence>
              {mobileOpen && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                  className="flex flex-col gap-6 px-2"
                >
                  {NAV_LINKS.map((link) => (
                    <motion.li
                      key={link.to + link.label}
                      variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `font-body text-base cursor-pointer transition-colors tracking-wide ${
                            isActive ? 'text-blue' : 'text-ink-muted hover:text-blue'
                          }`
                        }
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                  <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    <a
                      href={CONTACT_EMAIL}
                      className="font-body text-base text-ink-muted hover:text-blue transition-colors tracking-wide"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </a>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
