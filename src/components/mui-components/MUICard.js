
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";


import profile from '../../assets/gradpic.jpg';
import { Box, Divider, Typography } from "@mui/material";

const MUICard = () => {
  return(
    <Box>
      <Typography variant="h3" color={"#00e5ff"} ml={20} mt={5}>About</Typography>
      <Divider color="#858585" light sx={{ width: 1200, marginLeft: 10, marginTop: 5, marginBottom: 5 }}/>
      <Card className={"MuiReviewCard--01"} sx={{ marginTop: 15, marginBottom: 15 }}>
    <CardMedia
      component={"img"}
      className={"MuiCardMedia-root"}
      src={profile}
    />
    <CardContent className={"MuiCardContent-root"} sx={{ marginBottom: 45 }}>
      <div className={"ContentHead"}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          About Me
        </Typography>
      </div>
      <Typography gutterBottom color={"textSecondary"}>
        I'm Alicia and I am currently a resident of Seattle, Wa.
        I became a Software Developer after graduating from Syracuse University with a B.S. in Computer Science. 
        I am also a US Army veteran who served in the Virginia National Guard. As for my job
        as a Software Developer, I am currently working on personal projects and learning new skills and Programming Languages.
        Professionally I did Backend Development for Amazon Alexa, but am working on Fullstack and Frontend Development.
      </Typography>
    </CardContent>
  </Card>
    </Box>
  )
  };

MUICard.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiReviewCard--01": {
        maxWidth: 500,
        margin: "auto",
        overflow: "initial",
        position: "relative",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "none",
        borderRadius: 0,
        marginTop: 45,
        "&:hover": {
          transform: "scale(1.1)"
        },
        "& .MuiCardMedia-root": {
          height: "100%"
        },
        "& .MuiCardContent-root": {
          boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
          borderRadius: muiBaseTheme.spacing.unit / 2,
          margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
          backgroundColor: "#858585",
          position: "absolute",
          top: "50%",
          padding: muiBaseTheme.spacing.unit * 3,
          textAlign: "left",
          height: 240,
          "& .ContentHead": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          "& .ContentTail": {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            "& .MuiTypography--reviewer": {
              marginLeft: muiBaseTheme.spacing.unit,
              marginRight: "auto"
            }
          }
        }
      }
    }
  }
});


export default MUICard;
