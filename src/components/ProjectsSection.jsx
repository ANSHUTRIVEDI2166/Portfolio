import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import droneImg from '../assets/drone.jpg';

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

const projects = [
  {
    id: 'acadex',
    title: 'AcadeX — Academic Early Risk Detection & Monitoring Platform',
    period: 'Apr 2026',
    description:
      'Built a full-stack academic monitoring platform that detects at-risk students early using machine learning. The system tracks attendance, internal marks, assignment completion, and LMS activity — feeding them into an XGBoost and Neural Network pipeline that generates a risk score (0–100) with SHAP-based explainability. Role-based dashboards for Students, Teachers, Coordinators, and Guardians. Parent meeting scheduling automated via n8n and Google Calendar.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'XGBoost', 'TensorFlow', 'SHAP', 'n8n'],
    github: 'https://github.com/DhyanMehta/AcadeX.git',
    accentColor: '#3B82F6',
  },
  {
    id: 'ecommerce-rl',
    title: 'E-Commerce Customer Interaction RL Agent',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Built an AI agent that learns to handle e-commerce customer support through reinforcement learning — not scripted rules. Handles order tracking with uncertain carrier APIs, fraud-aware return decisions, and abandoned cart recovery under shared budget constraints. The agent relies on backend data, not tone, to make the right call. Trained on a free Colab T4 GPU using Llama-3.2-3B with QLoRA and GRPO, with curriculum learning from easy to hard tasks.',
    tech: ['Llama 3.2', 'QLoRA', 'GRPO', 'Python', 'Reinforcement Learning'],
    github: 'https://github.com/ANSHUTRIVEDI2166/ecommerce-111.git',
    accentColor: '#7C3AED',
  },
  {
    id: 'scamshield',
    title: 'ScamShield — AI Honeypot System',
    period: 'Feb 2026 – Apr 2026',
    description:
      'Built an agentic AI honeypot that detects scam messages and autonomously engages scammers in multi-turn conversations to extract intelligence — phone numbers, UPI IDs, bank accounts, and phishing links. The AI adopts realistic human personas and strategically probes across four conversation phases. Detection uses LLM chain-of-thought analysis combined with 80+ rule-based patterns. Built on LangGraph for orchestration and NVIDIA NIMs as the LLM.',
    tech: ['LangGraph', 'FastAPI', 'React', 'NVIDIA NIMs', 'Llama 3.1-8B'],
    github: 'https://github.com/ANSHUTRIVEDI2166/ScamShield---AI-Honeypot-System.git',
    accentColor: '#EC4899',
  },
  {
    id: 'churn-intelligence',
    title: 'E-Commerce Churn Intelligence System',
    period: 'Feb 2026 – Mar 2026',
    description:
      'Built a fully automated end-to-end churn intelligence system that classifies customers into actionable personas — High-Risk Churner, Loyal Champion, Deal Seeker, New Customer, and Unhappy Churner. The pipeline processes uploads through feature engineering, runs inference via Random Forest (94.87% accuracy), and upserts results into MongoDB. Identified 948 at-risk customers from 5,630 records and triggered personalised AI-written retention emails via n8n. Fully Dockerised.',
    tech: ['Python', 'Random Forest', 'MongoDB', 'n8n', 'Docker', 'FastAPI'],
    github: 'https://github.com/Dhruvbhagat24/E-Commerce-Churn.git',
    accentColor: '#F59E0B',
  },
  {
    id: 'plm-eco',
    title: 'PLM ECO System — Product Lifecycle Management Platform',
    period: 'Mar 2026',
    highlight: '🏆 1st Place — Odoo × Gujarat Vidyapith 24-Hour Hackathon (900+ teams, 15 states, ₹45,000 prize)',
    description:
      'Built a full-stack PLM platform managing Products, Bills of Materials, and Engineering Change Orders through a structured approval workflow. Four roles — Admin, Engineering, Approver, Operations — with configurable workflow stages, version history, and end-to-end audit logging across all critical operations.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Pydantic'],
    github: 'https://github.com/HridayPatel0575/PLM-BOM-ECO-management-system-Odoo-2026-Winning-Project',
    accentColor: '#10B981',
  },
  {
    id: 'resolve-ai',
    title: 'Resolve AI — Appliance Troubleshooting Assistant',
    period: 'Sep 2025',
    description:
      'Built a full-stack AI assistant for troubleshooting home appliances using product manuals. Users select built-in manuals or upload their own PDF for device-specific answers. Uses RAG with FAISS vector search and SentenceTransformers for context retrieval. Supports voice input via browser speech recognition and text-to-speech for hands-free troubleshooting.',
    tech: ['Next.js', 'React', 'FastAPI', 'NVIDIA NIMs', 'FAISS', 'SentenceTransformers'],
    github: 'https://github.com/ANSHUTRIVEDI2166/DataQuest',
    accentColor: '#00D4FF',
  },
  {
    id: 'skywatcher',
    title: 'SkyWatcher — AI-Based Autonomous Drone for Precision Agriculture',
    period: 'Apr 2024 – Jun 2025',
    description:
      'Developed SkyWatcher, an advanced quadcopter built on an S500 frame with 920KV motors, integrating a Pixhawk flight controller and Raspberry Pi 4 for onboard computation. Deployed in real farm environments to capture high-resolution aerial imagery, analysed using ML algorithms to identify crop conditions, plant health, and field variability — contributing to precision agriculture research.',
    tech: ['Raspberry Pi', 'Pixhawk', 'Python', 'OpenCV', 'Machine Learning'],
    github: null,
    image: droneImg,
    accentColor: '#A3E635',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{
        padding: '28px',
        borderRadius: '18px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(255, 255, 255, 0.02)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className="project-card"
    >
      {/* Image (if available) */}
      {project.image && (
        <div
          style={{
            marginBottom: '20px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      )}

      {/* Period */}
      <span
        style={{
          fontSize: '0.78rem',
          fontWeight: 600,
          color: project.accentColor,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {project.period}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          lineHeight: 1.4,
          marginTop: '8px',
          marginBottom: project.highlight ? '10px' : '14px',
        }}
      >
        {project.title}
      </h3>

      {/* Hackathon highlight */}
      {project.highlight && (
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#10B981',
            marginBottom: '14px',
            lineHeight: 1.5,
          }}
        >
          {project.highlight}
        </p>
      )}

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.75,
          marginBottom: '18px',
        }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '20px',
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {project.github && (
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 20px',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textDecoration: 'none',
            transition: 'border-color 0.25s ease, color 0.25s ease, background 0.25s ease',
          }}
          className="project-link"
        >
          <FaGithub style={{ fontSize: '1rem' }} />
          View on GitHub
        </motion.a>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
            <span className="gradient-text">Projects</span>
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

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
