"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  useScrollTrigger,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { GitHub, LinkedIn, WhatsApp, PictureAsPdf } from "@mui/icons-material";

// Styled AppBar component with blur effect
const BlurredAppBar = styled(AppBar)(({ theme }) => ({
  background: "#111823",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&.scrolled": {
    backdropFilter: "blur(10px)",
    backgroundColor: alpha(theme.palette.background.default, 0.7),
    boxShadow: theme.shadows[4],
  },
}));

// Styled Button for navigation items
const NavButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  textTransform: "lowercase",
  fontFamily: "var(--font-montserrat)", // Aplicar Montserrat
  fontWeight: 400, // Peso ligero
  transition: "color 0.3s ease",
  "&.scrolled": {
    color: "#000",
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <BlurredAppBar className={trigger ? "scrolled" : ""} position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section - Left */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ flexBasis: "200px" }}
          >
            <Avatar
              alt="Your Name"
              src="https://indrasolutions.cl/wp-content/uploads/2025/01/IMG_20250102_114600.jpg"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)", // Aplicar Montserrat
                color: trigger ? "#000" : "#fff",
                textDecoration: "none",
              }}
            >
              CM Portfolio
            </Typography>
          </Stack>

          {/* Action Buttons - Right */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexBasis: "200px", // Fixed width for buttons section
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <NavButton className={trigger ? "scrolled" : ""}>
              Contáctame
            </NavButton>
            <NavButton
              href="/path/to/cv.pdf"
              rel="noopener noreferrer"
              startIcon={<PictureAsPdf />}
              sx={{
                color: trigger ? "#000" : "#fff",
                whiteSpace: "nowrap", // Evitar salto de línea
              }}
            >
              Descargar cv
            </NavButton>

            {/* Icons */}
            <IconButton
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: trigger ? "#000" : "#fff" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: trigger ? "#000" : "#fff" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: trigger ? "#000" : "#fff" }}
            >
              <WhatsApp />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </BlurredAppBar>
  );
}
