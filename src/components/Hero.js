import { Box, Button, Link, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from './Footer';

import resume from '../assets/Alicia_H_Resume.pdf';

const muiBaseTheme = createTheme();

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      <MuiThemeProvider
        theme={createTheme({
          typography: {
            useNextVariants: true,
          },
          overrides: Navbar.getTheme(muiBaseTheme),
        })}
      >
        <Navbar />
      </MuiThemeProvider>
        <Box
          ml={"30%"}
          mr={"15%"}
          sx={{
            width: 500,
            height: 500,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color={"white"} mt={25} align={"center"} variant="h5">
            Hi, I'm
            <Box component="span" color={"#00e5ff"} sx={{ fontSize: 30 }}>
              {" "}
              Alicia Harris
            </Box>
          </Typography>
          <Typography color={"white"} align={"center"} variant="p">
            I'm a Software Developer who also does some 3D modeling and 3D scene
            creation.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 22,
              marginTop: 2,
            }}
          >
              <Button
              variant="contained"
                startIcon={<DownloadIcon />}
                sx={{ backgroundColor: '#00e5ff' }}
                component={Link}
                href={resume}
                download={"AliciaHarris-Resume"}
              >
                Download CV
              </Button>
          </Box>
        </Box>
      <Footer />
    </div>
  );
};
export default Hero;
