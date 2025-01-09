import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Avatar } from '@mui/material';
import { GitHub, LinkedIn, WhatsApp, Email } from '@mui/icons-material';
import { Flag } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111823',
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Contact Information */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              alt="CM Portfolio"
              src="https://indrasolutions.cl/wp-content/uploads/2025/01/IMG_20250102_114600.jpg"
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                CM Portfolio
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 400,
                }}
              >
                Email:{" "}
                <a
                  href="mailto:cesaramuroc@gmail.com"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  cesaramuroc@gmail.com
                </a>
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Flag sx={{ color: '#fff' }} />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'var(--font-montserrat)',
                    fontWeight: 400,
                  }}
                >
                  Tel:{" "}
                  <a
                    href="tel:+56937761679"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    +56 9 37761679
                  </a>
                </Typography>
              </Stack>
            </Box>
          </Box>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff' }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff' }}
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              href="mailto:cesaramuroc@gmail.com"
              sx={{ color: '#fff' }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          align="center"
          sx={{
            marginTop: '20px',
            fontSize: '0.875rem',
            color: '#fff',
            fontFamily: 'var(--font-montserrat)',
            fontWeight: 400,
          }}
        >
          Santiago, Región Metropolitana
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: '0.875rem',
            color: '#fff',
            fontFamily: 'var(--font-montserrat)',
            fontWeight: 400,
          }}
        >
          &copy; 2025 CM Portfolio.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
