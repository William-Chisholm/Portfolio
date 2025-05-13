'use client'

import { AppBar, Toolbar, Typography, Button, Box, Switch } from '@mui/material'
import Link from 'next/link'
import { useColorMode } from '../lib/ThemeContext'
import { useTheme } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function Navbar() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const isDark = theme.palette.mode === 'dark'

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

          {/* Dark/Light Mode toggle */}
          {isDark ? <DarkModeIcon sx={{ verticalAlign: 'middle' }} /> : <LightModeIcon sx={{ verticalAlign: 'middle' }} />}
          <Switch checked={isDark} onChange={toggleColorMode} color="default" />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
