import { MuiThemeProvider, createTheme } from "@material-ui/core";

import Navbar from './Navbar';
import SkillsCard from "./mui-components/SkillsCard";
import Footer from "./Footer";

const muiBaseTheme = createTheme();

const Skills = () => {
    return(
        <div className="App">
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