/* eslint-disable max-len */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box, Grid, Divider, Typography } from "@mui/material";

import amazon_logo from '../../assets/Amazon.png';
import virginia_logo from '../../assets/Virginia_NG.png';
import marine_logo from '../../assets/MFCC.png';

const cardData = [
    {
    img: `${amazon_logo}`,
    dates: "Jul 2021 - Jan 2023",
    company: "Amazon",
    title: "Software Development Engineer I",
    description: 
    "I worked for the Amazon Alexa Org as a member of the Smart Home Lighting and Appliances team. There I was heavily involved in backend development for features like Away Lighting, Hunches, and Smart Home Speechlet(VUI). This also includes oncall duties, Design reviews for new or updating features, and Document Writing to include COEs. As well as knowledge of AWS services to include EC2, Lambda, and CloudWatch."
},
{
    img: `${virginia_logo}`,
    dates: "Apr 2015 - Apr 2021",
    company: "Virginia National Guard",
    title: "Network Operator/Maintainer",
    description: "I operate and maintain the nodal network for the US Army along with the setup of communications at the brigade level. This includes for example the setup of VOIP phones, Internet, and Computers. Knowledge of Linux and Cisco Systems and the ability to lead a team of 4 or more soldiers."
},
{
    img: `${marine_logo}`,
    dates: "May 2017 - Jul 2017",
    company: "US Marine Forces Command",
    title: "Netops Specialist Jr",
    description: "I monitored and reported any issues with the network for multiple units in the US Marine Corps from the Marine Forces Command unit to those under their direct supervision."
}
]


const ExpCard = () => {
    return(
        <Box>
            <Typography variant="h3" color={"#00e5ff"} mt={5} ml={20}>Experience</Typography>
            <Divider color="#858585" light sx={{ width: 1200, marginLeft: 10, marginTop: 5, marginBottom: 5 }}/>
            <Grid>
        {cardData.map(card => (
            <Card className={"MuiProjectCard--01"} >
            <div className={"MuiCard__head"} >
              <Avatar
                className={"MuiAvatar-root"}
                src={card.img}
              />
              <Typography
                className={"MuiTypography--headLabel"}
                variant={"overline"}
                gutterBottom
              >
                {card.dates}
              </Typography>
            </div>
            <Divider className={"MuiDivider-root"} light />
            <CardContent className={"MuiCardContent-root"}>
              <Typography
                className={"MuiTypography--overline"}
                variant={"overline"}
                gutterBottom
              >
                {card.company}
              </Typography>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h5"}
                gutterBottom
              >
                {card.title}
              </Typography>
              <Typography className={"MuiTypography--subheading"} gutterBottom>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Grid>
  
        </Box>
    )
};

ExpCard.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiProjectCard--01": {
        transition: "0.3s",
        maxWidth: 800,
        margin: "auto",
        borderRadius: 16,
        padding: muiBaseTheme.spacing.unit * 3,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        marginTop: 65,
        backgroundColor: "#858585",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,229,255,0.8)"
        },
        "& .MuiCard__head": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .MuiAvatar-root": {
            width: 60,
            height: 60,
            backgroundColor: "#ffffff",
            transform: "translateY(50%)"
          },
          "& .MuiTypography--headLabel": {
            color: muiBaseTheme.palette.grey[800]
          }
        },
        "& .MuiDivider-root": {
          marginLeft: -muiBaseTheme.spacing.unit * 3,
          marginRight: -muiBaseTheme.spacing.unit * 3
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: 0,
          paddingTop: muiBaseTheme.spacing.unit * 6,
          "& .MuiTypography--overline": {
            fontSize: 16,
            fontWeight: "bold",
            color: muiBaseTheme.palette.grey[800]
          },
          "& .MuiTypography--heading": {
            fontWeight: 900
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          }
        }
      }
    }
  }
});

export default ExpCard;
