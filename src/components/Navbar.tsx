"use client";
import React, { useState } from "react";
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
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { GitHub, LinkedIn, WhatsApp, PictureAsPdf, Menu } from "@mui/icons-material";
import ContactModal from "./ContactModal"; // Importa el modal

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

const NavButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  textTransform: "lowercase",
  fontFamily: "var(--font-montserrat)",
  fontWeight: 400,
  transition: "color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
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
            {/* Logo and Avatar */}
            <Stack direction="row" alignItems="center" spacing={2}>
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
                  fontFamily: "var(--font-montserrat)",
                  color: trigger ? "#000" : "#fff",
                  textDecoration: "none",
                }}
              >
                CM Portfolio
              </Typography>
            </Stack>

            {/* Hamburger Menu for Small Screens */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Menu />
            </IconButton>

            {/* Full Menu for Large Screens */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <NavButton onClick={handleOpenModal}>Contáctame</NavButton>
              <NavButton
                href="/path/to/cv.pdf"
                rel="noopener noreferrer"
                startIcon={<PictureAsPdf />}
                sx={{ color: trigger ? "#000" : "#fff" }}
              >
                Descargar cv
              </NavButton>
              <IconButton
                href="https://github.com/Ultralacra"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: trigger ? "#000" : "#fff" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/c%C3%A9sar-muro-3b40a5159/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: trigger ? "#000" : "#fff" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://wa.me/56937761679?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20más%20sobre%20tu%20trabajo."
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

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton onClick={handleOpenModal}>
                <ListItemText primary="Contáctame" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component="a"
                href="/path/to/cv.pdf"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <PictureAsPdf />
                </ListItemIcon>
                <ListItemText primary="Descargar CV" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component="a"
                href="https://github.com/Ultralacra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <GitHub />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component="a"
                href="https://www.linkedin.com/in/c%C3%A9sar-muro-3b40a5159/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <LinkedIn />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component="a"
                href="https://wa.me/56937761679?text=¡Hola!%20Estoy%20interesado%20en%20conocer%20más%20sobre%20tu%20trabajo."
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItemIcon>
                  <WhatsApp />
                </ListItemIcon>
                <ListItemText primary="WhatsApp" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Modal de contacto */}
      <ContactModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
