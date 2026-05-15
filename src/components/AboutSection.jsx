import { motion } from 'framer-motion';
import {
  HiOutlineChatAlt2,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlinePuzzle,
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

const softSkills = [
  { label: 'Excellent Communication', icon: HiOutlineChatAlt2 },
  { label: 'Teamwork', icon: HiOutlineUserGroup },
  { label: 'Problem-Solving', icon: HiOutlinePuzzle },
  { label: 'Creativity', icon: HiOutlineLightBulb },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '100px 40px 80px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        {/* Section heading */}
        <motion.div
          style={{ marginBottom: '48px' }}
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
            About{' '}
            <span className="gradient-text">Me</span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-purple))',
            }}
          />
        </motion.div>

        {/* Bio paragraphs */}
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.85,
            marginBottom: '24px',
            maxWidth: '780px',
          }}
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          AI Engineer focused on building end-to-end intelligent systems. Passionate
          about taking ideas from prototype to working product. My expertise spans{' '}
          <span style={{ color: 'var(--color-accent-cyan)', fontWeight: 500 }}>
            machine learning, deep learning, AI agents, NLP
          </span>{' '}
          and data analysis with a focus on building impactful solutions that drive
          innovation.
        </motion.p>

        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.85,
            marginBottom: '24px',
            maxWidth: '780px',
          }}
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Hands-on experience across the full stack — from model training and
          deployment to backend APIs and automation workflows. Driven by real-world
          impact, continuous learning, and the belief that the best way to understand
          AI is to build with it.
        </motion.p>

        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.85,
            marginBottom: '48px',
            maxWidth: '780px',
          }}
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Let's connect to share ideas, collaborate on projects, or discuss innovative
          approaches to solving problems with technology.
        </motion.p>

        {/* Soft Skills */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            Soft Skills
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {softSkills.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 200 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  background: 'rgba(124, 58, 237, 0.08)',
                  color: 'var(--color-accent-purple)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <Icon style={{ fontSize: '1.1rem' }} />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
