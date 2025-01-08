'use client'

import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  useScrollTrigger,
  Stack,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

// Styled AppBar component with blur effect
const BlurredAppBar = styled(AppBar)(({ theme }) => ({
  background: '#111823',
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    backdropFilter: 'blur(10px)',
    backgroundColor: alpha(theme.palette.background.default, 0.7),
    boxShadow: theme.shadows[4],
  },
}))

// Styled Button for navigation items
const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}))

// Styled Button for Sign Up
const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
}))

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <BlurredAppBar className={trigger ? 'scrolled' : ''} position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo Section - Left */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexBasis: '200px', // Fixed width for logo section
            }}
          >
            EMPERIA
          </Typography>

          {/* Navigation Items - Center */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <NavButton>CREATOR TOOLS</NavButton>
            <NavButton>USE CASES</NavButton>
            <NavButton>RESOURCES</NavButton>
            <NavButton>ABOUT</NavButton>
            <NavButton>PRICING</NavButton>
          </Stack>

          {/* Action Buttons - Right */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexBasis: '200px', // Fixed width for buttons section
              justifyContent: 'flex-end',
            }}
          >
            <NavButton>CONTACT</NavButton>
            <NavButton>LOGIN</NavButton>
            <SignUpButton variant="contained">SIGN UP</SignUpButton>
          </Stack>
        </Toolbar>
      </Container>
    </BlurredAppBar>
  )
}
