import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineBeaker,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiOutlineStar,
  HiOutlineDocumentText,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from 'react-icons/hi';

const navItems = [
  { id: 'home', label: 'Home', icon: HiOutlineHome, to: '/' },
  { id: 'about', label: 'About', icon: HiOutlineUser, to: '/about' },
  { id: 'experience', label: 'Experience', icon: HiOutlineBriefcase, to: '/experience' },
  { id: 'research', label: 'Research', icon: HiOutlineBeaker, to: '/research' },
  { id: 'projects', label: 'Projects', icon: HiOutlineCode, to: '/projects' },
  { id: 'honours', label: 'Honours', icon: HiOutlineStar, to: '/honours' },
  { id: 'certificates', label: 'Certificates', icon: HiOutlineAcademicCap, to: '/certificates' },
  { id: 'resume', label: 'Resume', icon: HiOutlineDocumentText, to: '/resume' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 32px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
          backgroundColor: scrolled
            ? 'rgba(10, 10, 15, 0.85)'
            : 'rgba(10, 10, 15, 0.4)',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.06)'
            : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-bottom 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        {/* Name / Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="gradient-text">Anshu Trivedi</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navItems.map(({ id, label, icon: Icon, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={id}
                id={`nav-${id}`}
                to={to}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.03em',
                  transition: 'color 0.25s ease, background-color 0.25s ease',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                }}
                className="nav-link"
              >
                <Icon style={{ fontSize: '1.15rem' }} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-primary)',
            fontSize: '1.7rem',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              backgroundColor: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navItems.map(({ id, label, icon: Icon, to }, i) => {
              const isActive = location.pathname === to;
              return (
                <motion.div key={id}>
                  <Link
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 32px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      fontSize: '1.1rem',
                      fontWeight: isActive ? 600 : 500,
                      fontFamily: 'var(--font-heading)',
                      width: '260px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                      transition: 'color 0.2s ease, background-color 0.2s ease',
                    }}
                    className="nav-link"
                  >
                    <Icon style={{ fontSize: '1.4rem' }} />
                    {label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
