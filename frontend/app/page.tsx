'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TechStack from '@/components/TechStack'
import { motion } from 'framer-motion'

export default function Home() {
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const techStackVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Wave animation for the emoji
  const waveVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 15, -10, 15, -10, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: 0, // no repeat, just one wave
      },
    },
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="start">
        {/* Avatar + Name Heading */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Avatar
              alt="Will Chisholm"
              src="/headshot.jpg"
              sx={{ width: 144, height: 144 }}
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Typography variant="h3" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              <motion.span
                variants={waveVariants}
                initial="initial"
                animate="animate"
                style={{ display: 'inline-block', marginRight: 8 }}
              >
                👋
              </motion.span>
              I&apos;m Will Chisholm
            </Typography>
          </motion.div>
        </Stack>

        {/* Updated Intro */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Typography variant="h6" sx={{ mt: 2 }}>
            I&apos;m a Full Stack Developer with a passion for building clean, efficient, and scalable web applications.
          </Typography>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Typography variant="body1" sx={{ mt: 3 }}>
            I specialize in building robust backend systems and creating seamless, accessible user interfaces. My development process emphasizes clarity, scalability, and performance at every layer of the stack.
          </Typography>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Typography variant="body1" sx={{ mt: 2 }}>
            I follow best practices in testing, documentation, and code quality to ensure that everything I build is maintainable and reliable long term.
          </Typography>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          sx={{ mb: 4 }}
        >
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            From designing APIs and data models to deploying full-stack applications, I enjoy solving complex problems with thoughtful, well-engineered solutions.
          </Typography>
        </motion.div>

        {/* Visual Tech Stack */}
        <motion.div
          variants={techStackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <TechStack />
        </motion.div>
      </Box>
    </Container>
  )
}
