// 'use client'

// import Avatar from '@mui/material/Avatar'
// import Box from '@mui/material/Box'
// import Chip from '@mui/material/Chip'
// import Typography from '@mui/material/Typography'

// type TechItem = {
//   name: string
//   icon: string // relative to /public/icons/
// }

// const techStack: Record<string, TechItem[]> = {
//   frontend: [
//     { name: 'React', icon: 'react.png' },
//     { name: 'Next.js', icon: 'nextjs.png' },
//     { name: 'MUI', icon: 'mui.png' }
//   ],
//   backend: [
//     { name: 'Python', icon: 'python.png' },
//     { name: 'Flask', icon: 'flask.png' },
//     { name: 'SQLAlchemy', icon: 'sqlalchemy.png' }
//   ],
//   database: [
//     { name: 'Microsoft SQL Server', icon: 'mssql.png' }
//   ],
//   testing: [
//     { name: 'Pytest', icon: 'pytest.png' }
//   ],
//   tools: [
//     { name: 'REST APIs', icon: 'restapi.png' },
//     { name: 'Microservices', icon: 'microservices.png' },
//     { name: 'Unit Testing', icon: 'unittest.png' }
//   ]
// }

// export default function TechStack() {
//   return (
//     <Box sx={{ mt: 5 }}>
//       <Typography variant="h5" gutterBottom>
//         🧰 Tech Stack
//       </Typography>

//       {Object.entries(techStack).map(([category, techs]) => (
//         <Box key={category} sx={{ mb: 3 }}>
//           <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 'bold', mb: 1 }}>
//             {category}
//           </Typography>
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//             {techs.map((tech) => (
//               <Chip
//                 key={tech.name}
//                 label={tech.name}
//                 avatar={<Avatar src={`/icons/${tech.icon}`} alt={tech.name} />}
//                 variant="outlined"
//                 color="primary"
//               />
//             ))}
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   )
// }

'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid' // use Grid2 from MUI

type TechItem = {
  name: string
  icon: string
}

const techStack: TechItem[] = [
  { name: 'React', icon: 'react.png' },
  { name: 'Next.js', icon: 'nextjs.png' },
  { name: 'MUI', icon: 'mui.png' },
  { name: 'Python', icon: 'python.png' },
  { name: 'Flask', icon: 'flask.png' },
  { name: 'SQLAlchemy', icon: 'sqlalchemy.png' },
  { name: 'MSSQL', icon: 'mssql.png' },
  { name: 'Pytest', icon: 'pytest.png' }
]

export default function TechStack() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        🛠️ Technologies I Work With
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {techStack.map((tech) => (
          <Grid
            key={tech.name}
            size={{ xs: 6, md: 3 }} // 2 per row on mobile, 4 per row on desktop
            display="flex"
            justifyContent="center"
          >
            <Paper
              elevation={4}
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 1,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: 6
                }
              }}
            >
              <Box
                component="img"
                src={`/icons/${tech.icon}`}
                alt={tech.name}
                sx={{
                  width: 36,
                  height: 36,
                  objectFit: 'contain',
                  mb: 0.5
                }}
              />
              <Typography variant="caption" noWrap>
                {tech.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}



