import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import SocialLinks from './SocialLinks';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  },
});

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '160px 40px 100px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Greeting */}
        <motion.p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            marginBottom: '24px',
            letterSpacing: '0.02em',
          }}
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          Hi There{' '}
          <motion.span
            style={{ display: 'inline-block', fontSize: '1.2em' }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
          , I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '32px',
          }}
          variants={fadeUp(0.25)}
          initial="hidden"
          animate="visible"
        >
          <span className="gradient-text">Anshu Trivedi</span>
        </motion.h1>

        {/* Typing title */}
        <motion.h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '48px',
          }}
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
        >
          <TypingAnimation />
        </motion.h2>

        {/* Intro paragraphs */}
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
            marginBottom: '24px',
            maxWidth: '680px',
          }}
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="visible"
        >
          I'm an AI Engineer passionate about building intelligent systems that
          solve real problems. A{' '}
          <span style={{ color: 'var(--color-accent-purple)', fontWeight: 600 }}>
            2x hackathon winner
          </span>
          , I love turning ideas into products — fast, clean, and production-ready.
        </motion.p>

        <motion.p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
            maxWidth: '680px',
          }}
          variants={fadeUp(0.65)}
          initial="hidden"
          animate="visible"
        >
          From hackathons to research labs, I thrive in challenging environments
          where code meets creativity.
        </motion.p>

        {/* Find Me On */}
        <motion.div
          style={{
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '12px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            FIND ME ON
          </h3>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              color: 'var(--color-text-secondary)',
              marginBottom: '32px',
            }}
          >
            Feel free to{' '}
            <span style={{ color: 'var(--color-accent-purple)', fontWeight: 500 }}>
              connect
            </span>{' '}
            with me
          </p>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
