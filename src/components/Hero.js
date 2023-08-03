import { Box, Button, Link, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Text3D, Center } from "@react-three/drei";
import ubuntu from '../assets/Google_Fonts/Ubuntu_Regular.json';

import Navbar from "./Navbar";
import Footer from './Footer';
import Laptop from './Laptop';

import resume from '../assets/Alicia_H_Resume.pdf';
import { Canvas } from "@react-three/fiber";

const muiBaseTheme = createTheme();

const Text = () => {
  return(
    <Canvas camera={{ position: [0, -0.5, 2] }} style={{ height: 150, width: 1300 }}>
      <Center rotation={[0.5, 0, 0]}>
      <Text3D font={ubuntu} 
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1}>
          {`Welcome to my portfolio!`}
          <meshStandardMaterial color={'#00e5ff'}/>
        </Text3D> 
      </Center>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} />
    </Canvas>
  )
}


const Hero = () => {
  return (
    <div className="App"
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

      <Box ml={"5%"}>
        <Text />
      </Box>
        
        <Box
          ml={"30%"}
          sx={{
            width: 500,
            height: 400,
          }}
        >
          <Typography color={"white"} mt={15} align={"center"} variant="h4">
            I'm
            <Box component="span" color={"#00e5ff"} sx={{ fontSize: 54 }}>
              {" "}
              Alicia Harris,
            </Box>
          </Typography>
          <Typography color={"white"} align={"center"} variant="h4">
            and I'm a Software Developer who also does some 3D modeling and 3D scene
            creation.
          </Typography>
       
          <Box
            sx={{
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
        <Box style={{ width: 950, height: 400, marginLeft: 200 }}>
            <Laptop />
          </Box>
      <Footer />
    </div>
  );
};
export default Hero;
