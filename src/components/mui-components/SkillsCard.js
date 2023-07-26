import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider
} from "@mui/material";

import { skillsData } from "./SkillsData";

const SkillsCard = () => {
  return (
    <Box>
      <Typography variant="h3" color={"#00e5ff"} ml={20} mt={5}>
        Skills
      </Typography>
      <Divider color="#858585" light sx={{ width: 1200, marginLeft: 10, marginTop: 5, marginBottom: 5 }}/>
      <Grid container spacing={2} className="MuiSkillsCard-grid">
        {skillsData.map((skills) => (
          <Card className="MuiSkillsCard--01" 
          sx={{ marginLeft: 15, marginTop: 5, marginBottom: 5, backgroundColor: "#858585",
          ':hover': {
            boxShadow: "0 16px 70px -12.125px rgba(0,229,255,0.8)"
          } }}>
            <CardContent className={"MuiSkillsCard-content"} sx={{ alignItems: "center" }}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h4"}
                gutterBottom
              >
                {skills.skill}
              </Typography>
            </CardContent>
            <CardMedia className="MuiSkillsCard--media" component="img" src={skills.img} 
            sx={{ maxWidth: 200, maxHeight: 200 }}/>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

SkillsCard.getTheme = muiBaseTheme => ({
    MuiCard: {
        root: {
            "&.MuiSkillsCard--01": {
                transition: "0.3s",
                maxWidth: 300,
                margin: "auto",
                borderRadius: 16,
                padding: muiBaseTheme.spacing.unit * 3,
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                marginTop: 35,
                backgroundColor: "#858585",
                "&:hover": {
                    boxShadow: "0 16px 70px -12.125px rgba(0,229,255,0.8)"
                  },
                "& .MuiSkiilsCard-content": {
                    alignItems: "center",
                    "& .MuiTypography--heading": {
                        fontWeight: 900
                    }
                },
                "& .MuiSkillsCard--media": {
                    maxWidth: 200,
                    maxHeight: 200
                }
            }
        }
    }
   
});

export default SkillsCard;
