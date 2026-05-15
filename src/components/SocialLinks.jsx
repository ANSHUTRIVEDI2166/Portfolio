import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaOrcid } from 'react-icons/fa';
import { SiGooglescholar, SiLeetcode, SiCodeforces } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const links = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ANSHUTRIVEDI2166',
    icon: FaGithub,
    className: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anshu-trivedi-647107287',
    icon: FaLinkedinIn,
    className: 'linkedin',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/anshu_23aiml072/',
    icon: SiLeetcode,
    className: 'leetcode',
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/anshuu_trivedi',
    icon: SiCodeforces,
    className: 'codeforces',
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=Y1YQUZMAAAAJ&hl=en',
    icon: SiGooglescholar,
    className: 'scholar',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:anshutrivedi2166@gmail.com',
    icon: HiOutlineMail,
    className: 'email',
  },
  {
    id: 'orcid',
    label: 'ORCID',
    href: 'https://orcid.org/0009-0003-1108-4676',
    icon: FaOrcid,
    className: 'orcid',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

const SocialLinks = () => {
  return (
    <motion.div
      className="flex items-center gap-4 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map(({ id, label, href, icon: Icon, className }) => (
        <motion.a
          key={id}
          id={`social-${id}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`social-icon ${className}`}
          variants={itemVariants}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
