'use client'

import { useColorMode } from '../lib/ThemeContext'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function ThemeToggle() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {isDark ? <DarkModeIcon /> : <LightModeIcon />}
      <Switch checked={isDark} onChange={toggleColorMode} color="default" />
    </Box>
  )
}
