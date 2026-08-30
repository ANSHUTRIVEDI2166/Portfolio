import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineTrophy,
  HiOutlineStar,
  HiOutlineAcademicCap,
  HiOutlineCurrencyRupee,
  HiOutlineNewspaper,
} from 'react-icons/hi2';
import odooNewsImg from '../assets/odoo x gvp .jpeg';
import aiSummitImg from '../assets/ai summit.jpeg';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  },
});

const honours = [
  {
    id: 'n8n-hackathon',
    icon: HiOutlineTrophy,
    accentColor: '#F59E0B',
    title: '2nd Place – n8n Community Hackathon',
    org: 'n8n Community',
    date: 'Aug 2026',
    description:
      'Secured 2nd place in the n8n Community Hackathon by building an innovative AI-powered automation solution.',
  },
  {
    id: 'odoo-hackathon',
    icon: HiOutlineTrophy,
    accentColor: '#F59E0B',
    title: 'Winner — Odoo × Gujarat Vidyapith Hackathon',
    org: 'Odoo & Gujarat Vidyapith',
    date: 'Mar 2026',
    description:
      'Won 1st place among 900+ teams and 2,000+ participants from 15 states across India. Awarded ₹45,000 cash prize for building a Product Lifecycle Management system using FastAPI, PostgreSQL, and React.',
  },
  {
    id: 'ml-innovatex',
    icon: HiOutlineTrophy,
    accentColor: '#F59E0B',
    title: 'Winner — ML InnovateX Hackathon',
    org: 'Samatrix.io',
    date: 'Mar 2026',
    description:
      'Secured 1st place in the ML InnovateX Hackathon organised by Samatrix.io at CHARUSAT. Competed individually and developed innovative AI/ML-based solutions, strengthening problem-solving and machine learning skills in a competitive environment.',
  },
  {
    id: 'meta-openenv',
    icon: HiOutlineStar,
    accentColor: '#3B82F6',
    title: 'Finalist — Meta OpenEnv Hackathon',
    org: 'Meta',
    date: 'Apr 2026',
    description:
      'Selected among 800 teams from 31,000+ applicants across India. Represented in the offline round held in Bengaluru.',
  },
  {
    id: 'hcl-guvi',
    icon: HiOutlineStar,
    accentColor: '#7C3AED',
    title: 'Rank 15 — AI Summit Buildathon by HCL GUVI',
    org: 'HCL GUVI',
    date: 'Feb 2026',
    description:
      'Selected among the Top 200 teams out of 15,000+ teams and 40,000+ participants nationwide. Ranked 15th in the final round with a score of 85/100.',
  },
  {
    id: 'robot-project',
    icon: HiOutlineCurrencyRupee,
    accentColor: '#10B981',
    title: 'Project Head — Department Robot Project | ₹1,00,000 Grant',
    org: 'CHARUSAT',
    date: 'Jul 2025',
    description:
      'Leading the department\'s Robot Project as Project Head, responsible for technical direction and team coordination. Secured a ₹1,00,000 grant for the project\'s development.',
  },
  {
    id: 'drone-grant',
    icon: HiOutlineCurrencyRupee,
    accentColor: '#10B981',
    title: '₹1,00,000 Grant — AI-Based Autonomous Drone Project',
    org: 'iCreate CSPIT',
    date: 'Apr 2024',
    description:
      'Secured a ₹1,00,000 grant for developing an AI-based autonomous drone project, focusing on real-world applications of machine learning and embedded systems.',
  },
  {
    id: 'newspaper-odoo',
    icon: HiOutlineNewspaper,
    accentColor: '#F59E0B',
    title: 'Featured in Newspaper — Odoo × GVP Hackathon Win',
    org: 'Press Coverage',
    date: '2026',
    description:
      'Featured in the newspaper for winning the Odoo × Gujarat Vidyapith Hackathon, recognising the achievement at a national level.',
    image: odooNewsImg,
    scrollToMiddle: true,
  },
  {
    id: 'newspaper-ai-summit',
    icon: HiOutlineNewspaper,
    accentColor: '#7C3AED',
    title: 'Featured in Newspaper — Top 2% Finalist at India AI Summit 2026',
    org: 'Press Coverage',
    date: '2026',
    description:
      'Recognised in the newspaper for being among the Top 2% finalists at the India AI Summit 2026, competing against 40,000+ participants nationwide.',
    image: aiSummitImg,
  },
];

const HonourCard = ({ honour, index }) => {
  const Icon = honour.icon;
  const imgContainerRef = useRef(null);

  useEffect(() => {
    if (honour.scrollToMiddle && imgContainerRef.current) {
      const el = imgContainerRef.current;
      // Wait for image to load then scroll to middle
      const img = el.querySelector('img');
      if (img) {
        const scrollToCenter = () => {
          el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
        };
        if (img.complete) scrollToCenter();
        else img.addEventListener('load', scrollToCenter);
      }
    }
  }, [honour.scrollToMiddle]);
  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{
        display: 'flex',
        gap: '20px',
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(255, 255, 255, 0.02)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className="honour-card"
    >
      {/* Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `${honour.accentColor}15`,
          border: `1px solid ${honour.accentColor}30`,
          color: honour.accentColor,
          fontSize: '1.25rem',
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Org + date */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '6px',
          }}
        >
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: honour.accentColor,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {honour.org}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}
          >
            · {honour.date}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.4,
            marginBottom: '10px',
          }}
        >
          {honour.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(0.85rem, 1.3vw, 0.92rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.75,
          }}
        >
          {honour.description}
        </p>

        {/* Newspaper image */}
        {honour.image && (
          <div
            ref={honour.scrollToMiddle ? imgContainerRef : null}
            style={{
              marginTop: '16px',
              borderRadius: '12px',
              overflow: 'auto',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              maxHeight: '400px',
            }}
          >
            <img
              src={honour.image}
              alt={honour.title}
              style={{
                width: '100%',
                display: 'block',
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const HonoursSection = () => {
  return (
    <section
      id="honours"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '160px 40px 100px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        {/* Section heading */}
        <motion.div
          style={{ marginBottom: '60px' }}
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '12px',
            }}
          >
            Honours &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              borderRadius: '2px',
              background:
                'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-purple))',
            }}
          />
        </motion.div>

        {/* Honours list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {honours.map((honour, i) => (
            <HonourCard key={honour.id} honour={honour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonoursSection;
