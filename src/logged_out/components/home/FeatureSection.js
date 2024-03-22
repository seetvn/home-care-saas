import React from "react";
import { Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ComputerIcon from "@mui/icons-material/Computer";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudIcon from "@mui/icons-material/Cloud";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const iconSize = 30;

const features = [
  {
    color: "#223566",
    headline: "Rota Management",
    text: "Efficiently manage carer schedules and assignments with our intuitive rota management feature.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#223566",
    headline: "Calendar Integration",
    text: "Integrate with calendar tools to streamline appointment scheduling and keep track of important dates.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Intelligent Rota Modifications",
    text: "Effortlessly handle cancellations and adjustments with our smart rota management system.",
    icon: <AutoFixHighIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
    },
  {
    color: "#223566",
    headline: "User-Friendly Interface",
    text: "Enjoy a user-friendly interface designed to simplify navigation and enhance usability.",
    icon: <SentimentVerySatisfiedIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Data Analytics",
    text: "Gain insights into your operations and client outcomes with our comprehensive data analytics tools.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#223566",
    headline: "Support Services",
    text: "Access support services and resources to enhance the quality of care provided to clients.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Cloud Storage",
    text: "Securely store and access client data anytime, anywhere with our cloud storage solution.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#223566",
    headline: "Customization Options",
    text: "Customize the platform to suit your agency's unique requirements and workflows.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Coming soon: Carer Recruitment Database",
    text: "Efficiently grow your care team with our Carer Recruitment Database. Access a pool of qualified caregivers to streamline recruitment.",
    icon: <GroupAddIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
