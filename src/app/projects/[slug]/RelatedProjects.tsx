'use client'

import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link' // Importar Link para navegación

interface Project {
  title: string
  image: string
}

export default function RecentProjects() {
  const projects: Project[] = [
    {
      title: "WALMART REALM | HOLIDAYS 2024",
      image: "https://indrasolutions.cl/wp-content/uploads/2024/10/Copia-de-FOTO-FEED-1297-X-700.jpg",
    },
    {
      title: "WALMART REALM | YOUR DORM YOUR WAY",
      image: "https://indrasolutions.cl/wp-content/uploads/2024/10/Copia-de-FOTO-FEED-1297-X-700.jpg",
    },
    {
      title: "L'OCCITANE GREENHOUSE",
      image: "https://indrasolutions.cl/wp-content/uploads/2024/10/Copia-de-FOTO-FEED-1297-X-700.jpg",
    },
  ]

  return (
    <Box sx={{ bgcolor: '#1a1a1a', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
      {/* Top decorative line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1px',
          height: '40px',
          bgcolor: '#ff0000',
        }}
      />

      <Box sx={{ py: 6, px: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            RECENT PROJECTS
          </Typography>
          <Link href="/" passHref>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                borderRadius: '50px',
                px: 3,
                '&:hover': {
                  borderColor: '#fff',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              ALL CASES
            </Button>
          </Link>
        </Box>

        <Grid container spacing={3} position="relative">
          {projects.map((project, index) => (
            <>
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: 400,
                      borderRadius: '20px',
                    }}
                  />
                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        letterSpacing: '0.1em',
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Vertical divider lines between cards */}
              {index < projects.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: `${(index + 1) * (100 / 3)}%`,
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '40px',
                    bgcolor: '#ff0000',
                    display: { xs: 'none', md: 'block' },
                  }}
                />
              )}
            </>
          ))}
        </Grid>
      </Box>

      {/* Bottom decorative line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '1px',
          height: '40px',
          bgcolor: '#ff0000',
        }}
      />
    </Box>
  )
}
