'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="start">
        {/* Avatar + Name Heading */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar
            alt="Will Chisholm"
            src="/headshot.jpg"
            sx={{ width: 144, height: 144 }}
          />
          <Typography variant="h3">
            👋 Hi, I&apos;m Will Chisholm
          </Typography>
        </Stack>

        {/* Updated Intro */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          I&apos;m a Full Stack Developer with a passion for building clean, efficient, and scalable web applications.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          I specialize in building robust backend systems and creating seamless, accessible user interfaces. My development process emphasizes clarity, scalability, and performance at every layer of the stack.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          I follow best practices in testing, documentation, and code quality to ensure that everything I build is maintainable and reliable long term.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          From designing APIs and data models to deploying full-stack applications, I enjoy solving complex problems with thoughtful, well-engineered solutions.
        </Typography>

        {/* Visual Tech Stack */}
        <TechStack />
      </Box>
    </Container>
  )
}
