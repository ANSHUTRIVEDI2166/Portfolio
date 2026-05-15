import { motion } from 'framer-motion';
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from 'react-icons/hi';

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

const experiences = [
  {
    id: 'phaze-ai',
    icon: HiOutlineCode,
    accentColor: '#00D4FF',
    company: 'Phaze AI',
    location: 'Mumbai, Maharashtra, India · Remote',
    roles: [
      {
        title: 'AI Engineer',
        period: 'May 2025 – Sep 2025 · 5 mos',
      },
    ],
    summary:
      'Built end-to-end web scraping systems using Selenium and BeautifulSoup, targeting state and national-level eProcurement portals with dynamic content and authentication layers. Designed advanced automation workflows in n8n with webhook triggers, API integrations, conditional logic, and automated retries — eliminating manual intervention for data collection, transformation, and reporting. Integrated pipelines with PostgreSQL, cloud storage, and business tools to streamline lead generation in an agile environment.',
  },
  {
    id: 'charusat-coordinator',
    icon: HiOutlineAcademicCap,
    accentColor: '#7C3AED',
    company: 'AIML Department – CHARUSAT University',
    location: 'Gujarat, India · On-site',
    roles: [
      {
        title: 'Technical Coordinator – Head',
        period: 'Aug 2025 – Apr 2026 · 9 mos',
        description:
          'Led the technical wing of the AIML Department, overseeing project execution, event strategy, and team coordination across all department-level initiatives.',
      },
      {
        title: 'Technical Coordinator',
        period: 'Jul 2024 – Aug 2025 · 1 yr 2 mos',
        description:
          'Managed technical events and workshops while mentoring classmates in emerging fields such as AI, ML, and data science. Drove collaborative learning initiatives across the department.',
      },
    ],
  },
  {
    id: 'charusat-fellowship',
    icon: HiOutlineLightBulb,
    accentColor: '#EC4899',
    company: 'CHARUSAT University',
    location: 'Gujarat, India · On-site',
    roles: [
      {
        title: 'Undergraduate Student Fellow',
        period: 'Jul 2025 – Apr 2026 · 10 mos',
      },
    ],
    summary:
      'Actively contributed to academic and development activities across the AIML Department, CSPIT Institute, and CHARUSAT University. Developed a software solution for the Civil Department that digitised laboratory testing workflows in compliance with ISO 17025 standards, replacing manual documentation with a streamlined digital system.',
  },
  {
    id: 'innovators-club',
    icon: HiOutlineUserGroup,
    accentColor: '#F59E0B',
    company: 'Innovators Club – CHARUSAT University',
    location: 'Gujarat, India · On-site',
    roles: [
      {
        title: 'President',
        period: 'Jul 2025 – Apr 2026 · 10 mos',
      },
    ],
    summary:
      'Led the Innovators Club as President, driving the vision, strategy, and execution of all club initiatives. Successfully organised and conducted events including WomenInAIdea, DSA Treasure Hunt, and Git/GitHub workshops for junior students. Managed end-to-end event logistics, mentored club members, and fostered a culture of innovation and hands-on learning across the university.',
  },
];

const ExperienceCard = ({ exp, index }) => {
  const Icon = exp.icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{
        display: 'flex',
        gap: '24px',
        position: 'relative',
      }}
    >
      {/* Timeline line + dot */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        {/* Dot */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${exp.accentColor}15`,
            border: `1.5px solid ${exp.accentColor}35`,
            color: exp.accentColor,
            fontSize: '1.3rem',
            flexShrink: 0,
          }}
        >
          <Icon />
        </motion.div>
        {/* Line */}
        <div
          style={{
            width: '2px',
            flex: 1,
            background: `linear-gradient(180deg, ${exp.accentColor}30, transparent)`,
            marginTop: '8px',
            minHeight: '20px',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '48px', flex: 1, minWidth: 0 }}>
        {/* Company */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '4px',
            lineHeight: 1.3,
          }}
        >
          {exp.company}
        </h3>

        {/* Location */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            marginBottom: '14px',
          }}
        >
          {exp.location}
        </p>

        {/* Roles */}
        <div style={{ marginBottom: exp.summary ? '16px' : '0' }}>
          {exp.roles.map((role, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < exp.roles.length - 1 ? '20px' : 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: role.description ? '8px' : 0,
                }}
              >
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: exp.accentColor,
                  }}
                >
                  {role.title}
                </span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {role.period}
                </span>
              </div>
              {role.description && (
                <p
                  style={{
                    fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.75,
                    maxWidth: '700px',
                  }}
                >
                  {role.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Summary (only if no per-role descriptions) */}
        {exp.summary && (
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: '700px',
            }}
          >
            {exp.summary}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
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
            My{' '}
            <span className="gradient-text">Experience</span>
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

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
