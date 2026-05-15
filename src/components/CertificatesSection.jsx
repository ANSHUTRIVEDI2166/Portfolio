import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineDownload, HiOutlineEye, HiOutlineX } from 'react-icons/hi';
import {
  SiNvidia,
  SiPython,
} from 'react-icons/si';
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa';
import { TbBrain } from 'react-icons/tb';

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

const certificates = [
  {
    id: 'dbms-nptel',
    title: 'Database Management System',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    icon: FaDatabase,
    accentColor: '#F59E0B',
    file: '/certificates/Data_Base_Management_System.pdf',
  },
  {
    id: 'dsa-java-nptel',
    title: 'Data Structures and Algorithms Using Java',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    icon: FaJava,
    accentColor: '#EC4899',
    file: '/certificates/Data_Structure_and_Algorithms_using_Java.pdf',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Academy Graduate — Cloud Developing',
    issuer: 'Amazon Web Services (AWS Academy)',
    icon: FaAws,
    accentColor: '#FF9900',
    file: '/certificates/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20260401-31-9alwp0.pdf',
  },
  {
    id: 'dl-nvidia',
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    icon: SiNvidia,
    accentColor: '#76B900',
    file: '/certificates/Getting_started_with_DL_nvidia.pdf',
  },
  {
    id: 'jetson-nvidia',
    title: 'Getting Started with AI on Jetson Nano',
    issuer: 'NVIDIA Deep Learning Institute',
    icon: SiNvidia,
    accentColor: '#76B900',
    file: '/certificates/Jetsonnano_nvidia.PDF',
  },
  {
    id: 'cuda-nvidia',
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    issuer: 'NVIDIA Deep Learning Institute',
    icon: SiNvidia,
    accentColor: '#76B900',
    file: '/certificates/cuda_python_nvidia.pdf',
  },
  {
    id: 'ml-ibm',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    icon: TbBrain,
    accentColor: '#0062FF',
    file: '/certificates/Ml_with_python_IBM.pdf',
  },
  {
    id: 'ai-ds-samatrix',
    title: 'Foundations of AI, Data Science & Data Analytics',
    issuer: 'Samatrix.io',
    icon: TbBrain,
    accentColor: '#EC4899',
    file: '/certificates/foundation to ai data science and data analytics by samatrix.pdf',
  },
  {
    id: 'prob-samatrix',
    title: 'Probability Modelling Using Python',
    issuer: 'Samatrix.io',
    icon: SiPython,
    accentColor: '#3776AB',
    file: '/certificates/probablity modelling using python by samatrix.pdf',
  },
];

const CertificateCard = ({ cert, index, onPreview }) => {
  const Icon = cert.icon;

  return (
    <motion.div
      variants={fadeUp(index * 0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      style={{
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(255, 255, 255, 0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className="cert-card"
    >
      {/* Icon + issuer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${cert.accentColor}12`,
            border: `1px solid ${cert.accentColor}25`,
            color: cert.accentColor,
            fontSize: '1.15rem',
            flexShrink: 0,
          }}
        >
          <Icon />
        </div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: cert.accentColor,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            lineHeight: 1.3,
          }}
        >
          {cert.issuer}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
        }}
      >
        {cert.title}
      </h3>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onPreview(cert)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            transition: 'border-color 0.25s ease, color 0.25s ease, background 0.25s ease',
          }}
          className="cert-btn"
        >
          <HiOutlineEye style={{ fontSize: '0.95rem' }} />
          View
        </motion.button>

        <motion.a
          href={cert.file}
          download
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--color-accent-cyan)',
            background: 'transparent',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'border-color 0.25s ease, background 0.25s ease',
          }}
          className="cert-download"
        >
          <HiOutlineDownload style={{ fontSize: '0.95rem' }} />
          Download
        </motion.a>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <section
        id="certificates"
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '160px 40px 100px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
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
              <span className="gradient-text">Certificates</span>
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

          {/* Certificates grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="certs-grid"
          >
            {certificates.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={i}
                onPreview={setPreview}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPreview(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '85vh',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(15, 15, 20, 0.95)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Modal header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {preview.title}
                </span>
                <button
                  onClick={() => setPreview(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-muted)',
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                  }}
                >
                  <HiOutlineX />
                </button>
              </div>

              {/* PDF iframe */}
              <iframe
                src={preview.file}
                title={preview.title}
                style={{
                  flex: 1,
                  width: '100%',
                  border: 'none',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificatesSection;
