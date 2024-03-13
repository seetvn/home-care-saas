import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Avatar, Grid } from "@mui/material";

function Profile(props) {
    const {
        selectProfile,
        } = props;

        useEffect(selectProfile, [selectProfile]);

        return (
            <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
              {/* Profile Picture */}
              <Grid container justifyContent="center" marginBottom={2}>
                <Avatar
                alt="Profile Picture"
                src="/path/to/profile-picture.jpg" // Replace with the path to your profile picture
                sx={{ width: 200, height: 200, marginBottom: 10 }}
                />
              </Grid>
        
              {/* Rows of text information */}
              <Grid container spacing={2} alignItems="center" justifyContent="center" >
                {/* First row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Name:</Typography>
                  <Typography align="center" variant="body1">John Doe</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Address:</Typography>
                  <Typography align="center" variant="body1">123 Main St, City, Country</Typography>
                </Grid>
        
                {/* Second row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Phone:</Typography>
                  <Typography align="center" variant="body1">123-456-7890</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Email:</Typography>
                  <Typography align="center" variant="body1">john@example.com</Typography>
                </Grid>
        
                {/* Third row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Date of Birth:</Typography>
                  <Typography align="center" variant="body1">January 1, 1990</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Patient or Carer:</Typography>
                  <Typography align="center" variant="body1">Patient</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="left" marginBottom={2} marginTop={2} marginLeft={2}>
                <Typography variant="subtitle1">Notes:</Typography>
                <Typography align="left" variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
            </Paper>
          );
}

Profile.propTypes = {
    selectPatients: PropTypes.func.isRequired,
    // Add more prop types as needed for additional profile information
};

export default Profile;