// app/contact/page.tsx
'use client'

import { Container, TextField, Button, Typography, Box } from '@mui/material'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      {!submitted ? (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" margin="normal" required />
          <TextField fullWidth label="Email" type="email" margin="normal" required />
          <TextField fullWidth label="Message" margin="normal" multiline rows={4} required />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Send</Button>
        </Box>
      ) : (
        <Typography variant="h6" sx={{ mt: 2 }}>Thanks for reaching out!</Typography>
      )}
    </Container>
  )
}
