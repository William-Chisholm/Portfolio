// components/ProjectCard.tsx
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">View Project</Button>
      </CardActions>
    </Card>
  )
}
