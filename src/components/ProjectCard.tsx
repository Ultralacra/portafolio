import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { FaElementor, FaFigma } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si"; // Corrección para Material UI

interface ProjectCardProps {
  title: string;
  image: string;
  slug: string;
  technologies?: string[];
}

const techIcons: { [key: string]: React.ReactNode } = {
  React: <SiReact size={24} color="#fff" />,
  "Node.js": <SiNodedotjs size={24} color="#fff" />,
  MongoDB: <SiMongodb size={24} color="#fff" />,
  Illustrator: <SiAdobeillustrator size={24} color="#fff" />,
  Photoshop: <SiAdobephotoshop size={24} color="#fff" />,
  PostgreSQL: <SiPostgresql size={24} color="#fff" />,
  "Next.js": <SiNextdotjs size={24} color="#fff" />,
  "Material UI": <SiMaterialdesign size={24} color="#fff" />,
  "Tailwind CSS": <SiTailwindcss size={24} color="#fff" />,
  WordPress: <SiWordpress size={24} color="#fff" />,
  Elementor: <FaElementor size={24} color="#fff" />,
  Figma: <FaFigma size={24} color="#fff" />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  slug,
  technologies = [],
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #19202C",
        position: "relative",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      {/* Título en la parte superior de la tarjeta */}
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "-20px",
          left: "16px",
          backgroundColor: "#0F1621",
          color: "#fff",
          padding: "4px 8px",
          fontSize: "1rem",
          fontFamily: "var(--font-montserrat)", // Tipografía Montserrat
          fontWeight: 500, // Menor peso (Medium)
        }}
      >
        {title}
      </Typography>

      <Link href={`/projects/${slug}`} passHref>
        <Card
          elevation={0}
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
            height: "100%",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt={title}
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <CardContent sx={{ flexGrow: 1, p: 3 }}></CardContent>

          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 3,
              pt: 0,
              gap: 1.5,
            }}
          >
            {/* Íconos de las tecnologías */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {technologies.map((tech, index) => (
                <Box key={index}>{techIcons[tech] || null}</Box>
              ))}
            </Box>
          </CardActions>
        </Card>
      </Link>
    </Box>
  );
};

export default ProjectCard;
