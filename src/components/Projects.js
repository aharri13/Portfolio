import { MuiThemeProvider, createTheme } from "@material-ui/core";

import Navbar from "./Navbar";
import ProjectCard from "./mui-components/ProjectCard";
import Footer from "./Footer";

const muiBaseTheme = createTheme();

const Projects = () => {
    return(
        <div className="App">
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
            useNextVariants: true,
          },
          overrides: ProjectCard.getTheme(muiBaseTheme),
        })}
      >
           <ProjectCard />
      </MuiThemeProvider>
      <Footer />
      </div>
    )
}

export default Projects;