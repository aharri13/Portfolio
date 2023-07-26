import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo.png";
import { Avatar, Box, Toolbar } from "@mui/material";
import { routePath } from "../constants/route";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar color="transparent">
        <Box sx={{ marginLeft: 5 }}>
        <Avatar src={logo} alt='logo' onClick={() => navigate(routePath.hero)}/>
        </Box>
        <Box sx={{ marginLeft: 15 }}>
        <Tabs
          variant={"fullWidth"}
          value={false}
          textColor='white'
        >
          <Tab label="About" index={1} onClick={() => navigate(routePath.about)}/>
          <Tab label="Experience" index={2} onClick={() => navigate(routePath.experience)}/>
          <Tab label="Skills" index={3} onClick={() => navigate(routePath.skills)} />
          <Tab label="Projects" index={4} onClick={() => navigate(routePath.projects)}/>
        </Tabs>
        </Box>
      </Toolbar>
    </>
  );
};

Navbar.getTheme = () => ({
  MuiTabs: {
    root: {
      width: "100%",
    },
    indicator: {
      display: "none",
    },
  },
  MuiTab: {
    root: {
      position: "relative",
      display: "block",
      borderRadius: "5px",
      textAlign: "center",
      transition: "all .5s",
      padding: "5px 10px",
      color: "#FFFFFF",
      height: "auto",
      opacity: "1",
      margin: "5px 0",
      width: "70%",
      float: "none",
      "& + button": {
        margin: "10px 0",
      },
      "&$selected": {
        "&, &:hover": {
          color: "#121212",
          backgroundColor: "#00e5ff",
          boxShadow: "0 4px 5px -5px rgba(76, 175, 80, 0.4)",
        },
      },
    },
    labelContainer: {
      padding: "0!important",
      color: "inherit",
    },
    label: {
      lineHeight: "24px",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "500",
      position: "relative",
      display: "block",
      color: "#FFFFFF",
    },
  },
});

export default Navbar;
