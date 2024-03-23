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
import MeassageIcon from "@mui/icons-material/Message";
import CancelIcon from "@mui/icons-material/Cancel";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ContactsIcon from "@mui/icons-material/Contacts";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const iconSize = 30;

const features = [
  {
    color: "#223566",
    headline: "Find Local Carers Easily",
    text: "Discover nearby carers looking for work with our integrated database, making hiring hassle-free.",
    icon: <ContactsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#223566",
    headline: "Smart Matches & Easy Scheduling",
    text: "Our AI-powered system suggests the best carers for your clients and streamlines scheduling, saving you time and effort.",
    icon: <AutoFixHighIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#223566",
    headline: "Visit Logging App",
    text: "Caregivers can effortlessly log their visits and share updates with family members, ensuring transparency and peace of mind.",
    icon: <PhoneIphoneIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "400",
  },
  {
    color: "#223566",
    headline: "Generate Invoices",
    text: "Effortlessly create invoices with just a single click, saving you time and streamlining your billing process.",
    icon: <DescriptionIcon style={{ fontSize: iconSize }} />,
    mdDelay: "600",
    smDelay: "600",
  },
];

function ComingSoon(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Coming Soon
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

ComingSoon.propTypes = {};

export default withTheme(ComingSoon);
