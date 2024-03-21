import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import SettingsArea from "./SettingsArea";
import UserDataArea from "./UserDataArea";
import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";
import Timeline from './Timeline';
import SimpleMap from "./GoogleMap";
import Scheduler from "./Calender"

function Dashboard(props) {
  const {
    selectDashboard,
    CardChart,
    statistics,
    toggleAccountActivation,
    pushMessageToSnackbar,
    targets,
    setTargets,
    isAccountActivated,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <StatisticsArea CardChart={CardChart} data={statistics} />
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Your Account
        </Typography>
      </Box>
      <AccountInformationArea
        isAccountActivated={isAccountActivated}
        toggleAccountActivation={toggleAccountActivation}
      />
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Settings
        </Typography>
      </Box>
      <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
      <UserDataArea
        pushMessageToSnackbar={pushMessageToSnackbar}
        targets={targets}
        setTargets={setTargets}
      />
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Today's Scheduled Visits
        </Typography>
        {/* Render the Timeline component */}
        {/* <Timeline/> */}
        <Scheduler></Scheduler>
      </Box>
      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Today's Scheduled Visits
        </Typography>
        {/* <Map
          apiKey="AIzaSyBC9lP5hl9rBZbW4jNn-8x_edNzjFfZ3og"
          zoom={14}
          center={{ lat: 51.3813, lng: -2.3625 }}
          pinLocations={[
            { lat: 51.381, lng: -2.363 }, // Example pin location
            { lat: 51.385, lng: -2.364 }, // Another example pin location
            { lat: 51.385, lng: -2.374 },
            { lat: 51.379, lng: -2.376 },
            // Add more pin locations as needed
          ]}
        /> */}
        <SimpleMap>
          
        </SimpleMap>
      </Box>
    </Fragment>
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
