'use client'

import { Box, Container, Typography, Link, Stack } from '@mui/material'

export default function Footer() {
    // const currentDate = new Date().getFullYear()
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : '#1a1a1a',
        color: (theme) =>
          theme.palette.mode === 'light' ? 'text.secondary' : 'grey.400',
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography variant="body2">
            © Will Chisholm. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/about" underline="hover" color="inherit">
              About
            </Link>
            <Link href="/projects" underline="hover" color="inherit">
              Projects
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
            <Link
              href="https://github.com/William-Chisholm"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
