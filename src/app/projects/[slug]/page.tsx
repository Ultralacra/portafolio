"use client";
import React, { JSX } from "react";
import { useParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
//import RelatedProjects from "./RelatedProjects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { SiMaterialdesign } from "react-icons/si";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiWordpress,
  SiElementor,
} from "react-icons/si";

// Importa el JSON con los detalles
import projects from "../../../components/projects.json";

// Mapeo de tecnologías a íconos
const techIcons: Record<
  "React" | "Next.js" | "Material UI" | "Tailwind CSS" | "Figma" | "WordPress" | "Elementor",
  JSX.Element
> = {
  React: <SiReact size={24} color="#fff" />,
  "Next.js": <SiNextdotjs size={24} color="#fff" />,
  "Material UI": <SiMaterialdesign size={24} color="#fff" />,
  "Tailwind CSS": <SiTailwindcss size={24} color="#fff" />,
  Figma: <SiFigma size={24} color="#fff" />,
  WordPress: <SiWordpress size={24} color="#fff" />,
  Elementor: <SiElementor size={24} color="#fff" />,
};

const ProjectPage = () => {
  const params = useParams() as { slug: string }; // Define `slug` como un string
  const router = useRouter();

  // Encuentra el proyecto por el slug
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <Navbar/>
      <Box
        mt={8 }
        sx={{
          position: "relative",
          height: "80vh",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          borderRadius: "0 0 30px 30px",
          overflow: "hidden",
        }}
      >
        {/* Capa oscura semitransparente */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        ></Box>

        {/* Botón "Atrás" */}
         <Button
          variant="outlined"
          onClick={() => router.push("/")}
          sx={{
            textTransform: "none",
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            fontFamily: "var(--font-montserrat)",
            fontWeight: "500",
            borderRadius: "20px",
            border: "2px solid transparent",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          ← Atrás
        </Button>

        {/* Título */}
       <Typography
          variant="h2"
          sx={{
            position: "absolute",
            top: "80px",
            left: "20px",
            fontWeight: "700", // Grueso
            fontFamily: "var(--font-montserrat)",
            color: "white",
            zIndex: 2,
            textTransform:"uppercase"
          }}
        >
          {project.title}
        </Typography>

        {/* Íconos de tecnologías */}
        <Box
          sx={{
            position: "absolute",
            bottom: "90px",
            left: "20px",
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            zIndex: 2,
          }}
        >
          {project.technologies.map((tech) => (
            <Box
              mb={2}
              key={tech}
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              {techIcons[tech as keyof typeof techIcons] || null}
            </Box>
          ))}
        </Box>

        {/* Información de cliente y fecha */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "10px 20px",
            borderRadius: "20px",
            color: "white",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            zIndex: 2,
          }}
        >
          {/* Cliente */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="subtitle1" sx={{
              fontWeight: "bold",
                          fontFamily: "var(--font-montserrat)",


             }}>
              Cliente:
            </Typography>
            <Typography
              sx={{
                              fontFamily: "var(--font-montserrat)",

                }}
              variant="body2">{project.client}</Typography>
          </Box>

          {/* Fecha */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="subtitle1" sx={{
              fontWeight: "bold",
              fontFamily: "var(--font-montserrat)",
             

             }}>
              Fecha de lanzamiento:
            </Typography>
            <Typography
            sx={{            fontFamily: "var(--font-montserrat)",
}}
              variant="body2">{project.launchDate}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Información del proyecto */}
      <Box sx={{ padding: 4 }}>
        <Box sx={{ padding: 4 }}>
          {project.description.map((paragraph, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor:
                  index % 2 === 0 ? "rgba(240, 240, 240, 0.7)" : "transparent",
                padding: index % 2 === 0 ? 3 : 0,
                borderRadius: "16px",
                marginBottom: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: index % 2 === 0 ? "text.secondary" : "inherit",
                              fontFamily: "var(--font-montserrat)",

                }}
              >
                {paragraph}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Galería */}
        <Grid
        
          container spacing={2}>
          {project.images.slice(0, 10).map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ borderRadius: "16px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Imagen ${index + 1}`}
                  sx={{ height: "300px", objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Sección "Visitar Web" */}
        {project.url && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(240, 240, 240, 0.7)",
              borderRadius: "16px",
              padding: "16px 24px",
              marginTop: 4,
            }}
          >
            {/* Texto "Visitar Web" */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1a1a1a",
                            fontFamily: "var(--font-montserrat)",

              }}
            >
              Visitar Web
            </Typography>

            {/* Botón */}
            <Button
              color="primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
              color: '#fff',
              borderColor: 'black',
                borderRadius: '50px',
              bgcolor:"black",
              px: 3,
          
            }}
            >
              Ir al sitio
            </Button>
          </Box>
        )}
      </Box>
   {/*    <RelatedProjects /> */}
      <Footer/>
    </>
  );
};

export default ProjectPage;
