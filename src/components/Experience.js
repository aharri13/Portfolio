import { MuiThemeProvider, createTheme } from "@material-ui/core";

import Navbar from "./Navbar";
import ExpCard from "./mui-components/ExpCard";
import Footer from "./Footer";


const muiBaseTheme = createTheme();

const Experience = () => {
    return(
        <div 
        style={{ 
          backgroundColor: '#121212',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          minWidth: '100%',
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
          overrides: ExpCard.getTheme(muiBaseTheme)
        })}
      >
        <ExpCard />
      </MuiThemeProvider>
      <Footer />
      </div>
    )
}

export default Experience;