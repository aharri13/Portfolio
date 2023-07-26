import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import logo from "../assets/logo.png";


const Footer = () => {

  return (
    <Box sx={{ marginTop: 25, display: "flex", flexDirection: "column" }}>
      <Divider color="#858585" sx={{ width: 955, marginLeft: 30 }} />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Avatar
          src={logo}
          sx={{ width: 48, height: 48, marginLeft: 75, marginTop: 5 }}
        />
        <Typography
          variant="h5"
          sx={{ color: "white", marginTop: 6, marginLeft: 2 }}
        >
          Alicia Harris
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          marginTop: 2,
          marginLeft: 77,
        }}
      >
        aharri13@syr.edu
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 79,
          marginTop: 2,
        }}
      >
        <IconButton
          sx={{ color: "white" }}
          target="_blank"
          href="https://www.github.com/aharri13"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          target="_blank"
          href="https://www.linkedin.com/in/alicia-harris"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          target="_top"
          href="mailto:aharri13@syr.edu"
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
