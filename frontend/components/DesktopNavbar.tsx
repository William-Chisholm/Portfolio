'use client'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function DesktopNavbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyPortfolio
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} href="/">Home</Button>
          <Button color="inherit" component={Link} href="/projects">Projects</Button>
          <Button color="inherit" component={Link} href="/about">About</Button>
          <Button color="inherit" component={Link} href="/contact">Contact</Button>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
