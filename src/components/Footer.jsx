import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaOrcid } from 'react-icons/fa';
import { SiGooglescholar, SiLeetcode, SiCodeforces } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  { href: 'https://github.com/ANSHUTRIVEDI2166', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anshu-trivedi-647107287', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/anshu_23aiml072/', icon: SiLeetcode, label: 'LeetCode' },
  { href: 'https://codeforces.com/profile/anshuu_trivedi', icon: SiCodeforces, label: 'Codeforces' },
  { href: 'https://scholar.google.com/citations?user=Y1YQUZMAAAAJ&hl=en', icon: SiGooglescholar, label: 'Scholar' },
  { href: 'mailto:anshutrivedi2166@gmail.com', icon: HiOutlineMail, label: 'Email' },
  { href: 'https://orcid.org/0009-0003-1108-4676', icon: FaOrcid, label: 'ORCID' },
];

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/honours', label: 'Honours' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/resume', label: 'Resume' },
];

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '60px 40px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <Link
              to="/"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '12px',
              }}
            >
              <span className="gradient-text">Anshu Trivedi</span>
            </Link>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
              }}
            >
              AI Engineer building intelligent systems from prototype to production.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px 32px',
              }}
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  className="footer-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  className="footer-social"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.04)' }} />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
            }}
          >
            © {new Date().getFullYear()} Anshu Trivedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
