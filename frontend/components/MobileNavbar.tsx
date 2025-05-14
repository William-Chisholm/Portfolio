'use client'

import { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Projects', href: '/projects' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  const handleNavClick = () => {
    setDrawerOpen(false)
  }

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-start', alignItems: 'center', px: 2 }}>
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Typography variant="h6" component="div">
              MyPortfolio
            </Typography>
            <ThemeToggle />
          </Box>
          <Divider />
          <List>
            {navLinks.map(({ text, href }) => (
              <Link key={text} href={href} passHref>
                <ListItemButton component="a" onClick={handleNavClick}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
