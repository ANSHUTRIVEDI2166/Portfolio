import { motion } from 'framer-motion';
import { HiOutlineDownload, HiOutlineDocumentText } from 'react-icons/hi';

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

const RESUME_URL = `${import.meta.env.BASE_URL}Resume_Anshu_Trivedi.pdf`;

const ResumeSection = () => {
  return (
    <section
      id="resume"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '160px 40px 100px',
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
            My{' '}
            <span className="gradient-text">Resume</span>
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

        {/* Download button */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: '40px' }}
        >
          <motion.a
            href={RESUME_URL}
            download="Resume_Anshu_Trivedi.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '12px',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--color-accent-cyan)',
              background: 'transparent',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'border-color 0.25s ease, background 0.25s ease',
            }}
            className="publication-link"
          >
            <HiOutlineDownload style={{ fontSize: '1.2rem' }} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          {/* PDF header bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            <HiOutlineDocumentText
              style={{ fontSize: '1.2rem', color: 'var(--color-accent-cyan)' }}
            />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
            >
              Resume_Anshu_Trivedi.pdf
            </span>
          </div>

          {/* Embedded PDF */}
          <iframe
            src={RESUME_URL}
            title="Anshu Trivedi Resume"
            style={{
              width: '100%',
              height: '850px',
              border: 'none',
              display: 'block',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
