import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Importar los datos del archivo JSON
import projects from "../components/projects.json";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0F1621",
          margin:"0px"
        }}
        >

          <Navbar />
      <Container

        maxWidth="xl">
        <Box mt={6} sx={{ marginTop: "60px", padding: 2 }}>
            <Typography 
              color="#D6DBE4"
            mb={12}
            variant="h4" 
            align="left" 
            fontSize="6vw"
            gutterBottom 
           
          >
         Realizados por mi...
          </Typography>
          <Grid
            container
            spacing={4}
           
          >
            {projects.map((project) => (
              <Grid
                item
                key={project.slug}
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    
      </Box>
      <Footer />
    </>


  );
};

export default Home;
