'use client'

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material'
import themeOptions from './theme'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => useContext(ColorModeContext)

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Check localStorage for the saved theme preference, or default to 'light'
  const storedMode = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
  const [mode, setMode] = useState<PaletteMode>(storedMode as PaletteMode || 'light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // After the component mounts, update the state to trigger theme change
    setMounted(true)
  }, [])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light'
        setMode(newMode)
        // Persist the user's theme choice in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newMode)
        }
      },
    }),
    [mode]
  )

  // Only apply the theme after mounting to avoid SSR mismatches
  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])

  if (!mounted) {
    return <>{children}</> // Render children without applying the theme during SSR
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
