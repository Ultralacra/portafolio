"use client";
import React  from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface ContactModalProps {
  open: boolean; // Estado de visibilidad del modal
  handleClose: () => void; // Función para cerrar el modal
}

const ContactModal: React.FC<ContactModalProps> = ({ open, handleClose }) => {
  return (
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
          <TextField label="Nombre" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
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
          >
            Enviar mensaje
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ContactModal;
