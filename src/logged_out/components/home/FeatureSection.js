import React from "react";
import { Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MapIcon from "@mui/icons-material/Map";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const iconSize = 30;

const features = [
  {
    color: "#223566",
    headline: "User-Friendly Interface",
    text: "Effortlessly manage client and carer schedules with drag-and-drop functionality.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#223566",
    headline: "Efficient Sorting and Filtering",
    text: "Effortlessly organize caregiver and client information by expertise or care type.",
    icon: <FilterAltIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Real-Time Schedule Snapshot",
    text: "Users can access a real-time snapshot of the schedule by viewing the locations of clients and caregivers on the dashboard map.",
    icon: <MapIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "400",
  },
  {
    color: "#223566",
    headline: "Automated Backups",
    text: "Our robust database automatically backs up your data, ensuring reliability and peace of mind.",
    icon: <VerifiedUserIcon style={{ fontSize: iconSize }} />,
    mdDelay: "600",
    smDelay: "600",
  },
  {
    color: "#223566",
    headline: "Scalable Subscription Plans",
    text: "Offers flexible subscription plans depending on the number of clients you have.",
    icon: <MonetizationOnIcon style={{ fontSize: iconSize }} />,
    mdDelay: "800",
    smDelay: "800",
  },
  {
    color: "#223566",
    headline: "Support Services",
    text: "Access support services and resources to enhance the quality of care provided to clients.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "1000",
    smDelay: "1000",
  },
  {
    color: "#223566",
    headline: "Cloud Storage",
    text: "Securely store and access client data anytime, anywhere with our cloud storage solution.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "1200",
    smDelay: "1200",
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
