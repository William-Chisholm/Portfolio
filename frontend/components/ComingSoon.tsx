'use client'

import { Box, Typography, Container } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction'

export default function ComingSoon() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
      <ConstructionIcon color="warning" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Page Under Construction
      </Typography>
      <Typography variant="body1">
        This page is currently in development and will be available soon. Stay tuned!
      </Typography>
    </Container>
  )
}
