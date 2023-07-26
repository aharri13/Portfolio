import { MuiThemeProvider, createTheme } from "@material-ui/core";

import Navbar from './Navbar';
import SkillsCard from "./mui-components/SkillsCard";
import Footer from "./Footer";

const muiBaseTheme = createTheme();

const Skills = () => {
    return(
        <div
      style={{
        backgroundColor: "#121212",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
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
      <MuiThemeProvider
        theme={createTheme({
          typography: {
            useNextVariants: true,
          },
          overrides: SkillsCard.getTheme(muiBaseTheme),
        })}
      >
           <SkillsCard />
      </MuiThemeProvider>
      <Footer />
      </div>
    )
}

export default Skills;