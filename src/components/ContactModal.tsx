"use client";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "90%" : 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Permite letras, acentos y espacios
    return nameRegex.test(name);
  };

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Todos los campos son obligatorios");
      setSnackbarOpen(true);
      return;
    }

    if (!validateName(name)) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "El nombre solo puede contener letras, espacios y caracteres acentuados"
      );
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Por favor, introduce un correo electrónico válido");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbarSeverity("success");
        setSnackbarMessage("¡Mensaje enviado con éxito!");
        setSnackbarOpen(true);
        handleClose();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(data.message || "Error al enviar el mensaje");
        setSnackbarOpen(true);
      }
    } catch (error) {
      let errorMessage =
        "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setSnackbarSeverity("error");
      setSnackbarMessage(errorMessage);
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="h2" fontWeight="bold">
              Contáctanos
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
            Envíanos un mensaje y te responderemos lo antes posible.
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!validateName(name) && name !== ""}
              helperText={
                !validateName(name) && name !== ""
                  ? "El nombre solo puede contener letras y espacios"
                  : ""
              }
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!validateEmail(email) && email !== ""}
              helperText={
                !validateEmail(email) && email !== ""
                  ? "Introduce un correo electrónico válido"
                  : ""
              }
            />
            <TextField
              label="Mensaje"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              onClick={handleSubmit}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;
