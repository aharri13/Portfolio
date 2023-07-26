import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import MUICard from "./mui-components/MUICard";
import Footer from './Footer';

const muiBaseTheme = createTheme();

const About = () => {
  return(
    <div 
        style={{ 
          backgroundColor: '#121212',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}>
            <MuiThemeProvider
        theme={createTheme({
          typography: {
            useNextVariants: true
          },
          overrides: Navbar.getTheme(muiBaseTheme)
        })}
      >
        <Navbar />
      </MuiThemeProvider>

      <MuiThemeProvider
          theme={createTheme({
          typography: {
            useNextVariants: true
          },
          overrides: MUICard.getTheme(muiBaseTheme)
        })}
      >
        <MUICard />
      </MuiThemeProvider>
      <Footer />
      </div>
  )
}

export default About;