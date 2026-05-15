import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineBookOpen } from 'react-icons/hi';

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

const publications = [
  {
    id: 'democraticnet',
    title:
      'DemocraticNet: A Deep Learning Pipeline for Multi-Class Multi-Label Ministry News Classification',
    venue:
      'International Conference on Information and Communication Technology for Competitive Strategies',
    publisher: 'Springer Nature Singapore',
    date: 'Dec 19, 2024',
    description:
      'Developed DemocraticNet, an automated multi-class multi-label news classification pipeline using an ensemble of transformer models — BERT, DeBERTaV3, RoBERTa, and XLNet — fine-tuned to classify news articles across government ministry domains. Achieved 85.043% top-3 accuracy. Published at an international conference through Springer Nature Singapore.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-4151-2_13',
    tags: ['NLP', 'Transformers', 'BERT', 'DeBERTaV3', 'RoBERTa', 'XLNet', 'Ensemble Learning'],
  },
];

const ResearchSection = () => {
  return (
    <section
      id="research"
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
            <span className="gradient-text">Research</span>
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

        {/* Publications */}
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            variants={fadeUp(0.15 * index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.02)',
              marginBottom: '24px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            className="research-card"
          >
            {/* Icon + venue tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 212, 255, 0.1)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  color: 'var(--color-accent-cyan)',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                <HiOutlineBookOpen />
              </div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {pub.publisher} · {pub.date}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.4,
                marginBottom: '8px',
              }}
            >
              {pub.title}
            </h3>

            {/* Venue */}
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-muted)',
                fontStyle: 'italic',
                marginBottom: '20px',
              }}
            >
              {pub.venue}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: '24px',
                maxWidth: '780px',
              }}
            >
              {pub.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px',
              }}
            >
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '5px 14px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--color-accent-purple)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    background: 'rgba(124, 58, 237, 0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--color-accent-cyan)',
                background: 'transparent',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                textDecoration: 'none',
                transition: 'border-color 0.25s ease, background 0.25s ease',
              }}
              className="publication-link"
            >
              <HiOutlineExternalLink style={{ fontSize: '1rem' }} />
              View Publication
            </motion.a>
          </motion.div>
        ))}

        {/* Forthcoming */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            marginTop: '40px',
            padding: '24px 28px',
            borderRadius: '14px',
            borderLeft: '3px solid var(--color-accent-purple)',
            background: 'rgba(124, 58, 237, 0.04)',
          }}
        >
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: 'var(--color-accent-purple)', fontWeight: 600 }}>
              Forthcoming:
            </span>{' '}
            Two additional journal papers are currently under review and will be published soon. Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
