'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="start">
        {/* Avatar + Name Heading */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar
            alt="Will Chisholm"
            src="/headshot.jpg" // Place your image in /public/profile.jpg
            sx={{ width: 144, height: 144 }}
          />
          <Typography variant="h3">
            👋 Hi, I&apos;m Will Chisholm
          </Typography>
        </Stack>

        <Typography variant="h6" sx={{ mt: 2 }}>
          I&apos;m a Full Stack Developer with a passion for building clean, efficient, and scalable web applications.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          I specialize in both frontend and backend development using modern tools and frameworks. On the backend, I work extensively with
          <strong> Python</strong> and <strong> Flask</strong> to build robust APIs and microservices. I use <strong> SQLAlchemy</strong> as an ORM for data modeling and interaction with
          <strong> Microsoft SQL Server (MSSQL)</strong>, ensuring performance and maintainability at scale.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          I follow best practices for testing and reliability using <strong> Pytest</strong>, and I strive to write code that is not only functional but also well-documented and testable.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          On the frontend, I use <strong> React</strong> and <strong> Next.js</strong> to craft responsive and accessible user interfaces, styled with <strong> MUI</strong> for a clean and modern look.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Whether it&apos;s building RESTful APIs, designing database schemas, writing unit tests, or deploying full-stack applications, I enjoy solving real-world problems with code.
        </Typography>
      </Box>
    </Container>
  )
}
