import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Box, Button, Divider, Typography } from "@mui/material";


import { projectData } from "./ProjectData";
import Carousel from "react-material-ui-carousel";

const ProjectCard = () => {
  return (
    <>
    <Box>
      <Typography variant="h3" color={"#00e5ff"} ml={20} mt={5}>
        Projects
      </Typography>
      <Divider
        color="#858585"
        light
        sx={{ width: 1200, marginLeft: 10, marginTop: 5, marginBottom: 5 }}
      />
    </Box>
    <Box style={ { width: '65%', height: '75%' }}>
        <Carousel sx={{ marginLeft: 55 }}
        swipe={false}
        navButtonsAlwaysVisible={true}>
            {
                projectData.map((project, index) => {
                    return(
                        <Projects item={project} key={index}/>
                    )
                })
            }
        </Carousel>
    </Box>
    </>
  );
};

const Projects = ({ item }) => {
  return (
    <Card className={"MuiNewsCard--01"}>
      <CardMedia className={"MuiCardMedia-root"} image={item.img} />
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
          color={"darkgrey"}
        >
          {item.title}
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"} >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions className={"MuiCardActions-root"}>
        <Button color={"primary"} fullWidth target="_blank" href={item.link}>
          See Live Demo
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiNewsCard--01": {
        maxWidth: 600,
        margin: "auto",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "none",
        borderRadius: 0,
        "& button": {
          marginLeft: 0,
        },
        "&:hover": {
          transform: "scale(1.04)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
        "& .MuiCardMedia-root": {
          paddingTop: "65%",
          position: "relative",
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: muiBaseTheme.spacing.unit * 3,
          "& .MuiTypography--overline": {
            color: muiBaseTheme.palette.grey[500],
            fontWeight: "bold",
          },
          "& .MuiTypography--heading": {
            fontWeight: 900,
            lineHeight: 1.3,
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            color: muiBaseTheme.palette.text.primary,
            fontWeight: "bold",
          },
        },
        "& .MuiCardActions-root": {
          padding: `0 ${muiBaseTheme.spacing.unit * 3}px ${
            muiBaseTheme.spacing.unit * 3
          }px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
    },
  },
  MuiButton: {
    root: {
      "& svg, .material-icons": {
        marginLeft: muiBaseTheme.spacing.unit,
      },
    },
    label: {
      textTransform: "initial",
    },
  },
});

export default ProjectCard;
