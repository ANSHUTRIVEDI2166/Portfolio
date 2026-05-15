import { motion } from 'framer-motion';
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiRaspberrypi,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiFastapi,
  SiAndroid,
  SiApple,

  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiFirebase,
  SiSupabase,
  SiAnaconda,


  SiMysql,
  SiN8N,
} from 'react-icons/si';
import {
  HiOutlineDatabase,
  HiOutlineCog,
} from 'react-icons/hi';
import { GiRobotGolem } from 'react-icons/gi';
import { FaWindows } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbChartBar } from 'react-icons/tb';

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

const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: HiOutlineDatabase, color: '#F29111' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#A22846' },
  { name: 'Robotics', icon: GiRobotGolem, color: '#7C3AED' },
  { name: 'Git / GitHub', icon: SiGit, color: '#F05032' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Keras', icon: SiKeras, color: '#D00000' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'OpenEnv', icon: HiOutlineCog, color: '#00D4FF' },
];

const tools = [
  { name: 'Windows', icon: FaWindows, color: '#0078D4' },
  { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
  { name: 'Apple', icon: SiApple, color: '#A2AAAD' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Anaconda', icon: SiAnaconda, color: '#44A833' },
  { name: 'Power BI', icon: TbChartBar, color: '#F2C811' },
  { name: 'Tableau', icon: TbChartBar, color: '#E97627' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

const TechCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.04,
      type: 'spring',
      stiffness: 200,
      damping: 18,
    }}
    whileHover={{
      y: -6,
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
    className="tech-card"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '20px 12px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      background: 'rgba(255, 255, 255, 0.02)',
      cursor: 'default',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
      minWidth: '95px',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${color}40`;
      e.currentTarget.style.boxShadow = `0 0 20px ${color}15, 0 4px 20px rgba(0,0,0,0.3)`;
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
    }}
  >
    <Icon style={{ fontSize: '2rem', color }} />
    <span
      style={{
        fontSize: '0.78rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}
    >
      {name}
    </span>
  </motion.div>
);

const TechStackSection = () => {
  return (
    <section
      id="techstack"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '80px 40px 100px',
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
            Tech{' '}
            <span className="gradient-text">Stack</span>
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

        {/* Tech grid */}
        <motion.p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
            marginBottom: '20px',
          }}
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Technologies I work with
        </motion.p>

        <div
          className="tech-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            marginBottom: '60px',
          }}
        >
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} {...tech} index={i} />
          ))}
        </div>

        {/* Tools grid */}
        <motion.p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 600,
            marginBottom: '20px',
          }}
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Tools I use
        </motion.p>

        <div
          className="tech-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
          }}
        >
          {tools.map((tool, i) => (
            <TechCard key={`tool-${tool.name}`} {...tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
