import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Avatar, Grid, Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Carer from './samantha.jpg'

function Profile(props) {
    const {
        selectProfile,
        fromCarersPage,
        classes
        } = props;

        const history = useHistory();

        useEffect(selectProfile, [selectProfile]);

        const handleGoBack = () => {
            history.goBack();
        };

        return (
            <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
              {/* Go back button */}
              <Grid container justifyContent="left" marginBottom={2}>
                <Button variant="contained" onClick={handleGoBack} >
                    Go back
                </Button> 
              </Grid>
              {/* Profile Picture */}
              <Grid container justifyContent="center" marginBottom={2}>
                <Avatar
                //alt="Profile Picture"
                src={Carer} // Replace with the path to your profile picture
                sx={{ width: 200, height: 200, marginBottom: 10 }}
                />
              </Grid>
        
              {/* Rows of text information */}
              <Grid container spacing={2} alignItems="center" justifyContent="center" >
                {/* First row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Name:</Typography>
                  <Typography align="center" variant="body1">Samantha Keir</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Date of Birth:</Typography>
                  <Typography align="center" variant="body1">January 1, 1980</Typography>
                </Grid>

                {/* First row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Gender:</Typography>
                  <Typography align="center" variant="body1">Female</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Address:</Typography>
                  <Typography align="center" variant="body1">124 Main St, Bath, UK</Typography>
                </Grid>
                
                {/* First row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Recommended By:</Typography>
                  <Typography align="center" variant="body1">John Nuts</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Availability</Typography>
                  <Typography align="center" variant="body1">Monday - Friday</Typography>
                </Grid>
                        
                {/* Second row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Phone:</Typography>
                  <Typography align="center" variant="body1">0786722869</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Email:</Typography>
                  <Typography align="center" variant="body1">sam56@example.com</Typography>
                </Grid>
        
                {/* Third row */}
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Care Type:</Typography>
                  <Typography align="center" variant="body1">Night Care</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Recommended By:</Typography>
                  <Typography align="center" variant="body1">Tom Whistle</Typography>
                </Grid>

                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">DBS Date:</Typography>
                  <Typography align="center" variant="body1">21/07/22</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">National Insurance Number:</Typography>
                  <Typography align="center" variant="body1">SD7438208346</Typography>
                </Grid>

                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">UTR Number:</Typography>
                  <Typography align="center" variant="body1">234 68766 45543 A</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Qualification:</Typography>
                  <Typography align="center" variant="body1">BSc Nursing - UWE</Typography>
                </Grid>

                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Other Current Job:</Typography>
                  <Typography align="center" variant="body1">None</Typography>
                </Grid>
                <Grid item xs={6} sx={{ borderBottom: '1px solid lightgrey', borderTop: '1px solid lightgrey', paddingTop: 2, paddingBottom: 2 }}>
                  <Typography align="center" variant="subtitle1">Visa Status:</Typography>
                  <Typography align="center" variant="body1">UK Citizen</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="left" marginBottom={2} marginTop={2} marginLeft={2}>
                <Typography variant="subtitle1">Notes:</Typography>
              </Grid>
              <Grid container justifyContent="left" marginBottom={2} marginTop={2} marginLeft={2}>
                <Typography align="left" variant="body1">
                Leave requested for 25/05/2024.
                </Typography>
              </Grid>

            {/* Highlight the source page icon if it's from the "Carers" page */}
            {fromCarersPage && (
                <MedicalServicesIcon className={classes.textPrimary} fontSize="small" />
            )}
            </Paper>
          );
}

Profile.propTypes = {
    selectPatients: PropTypes.func.isRequired,
    fromCarersPage: PropTypes.bool.isRequired, // Add the prop type for fromCarersPage
    classes: PropTypes.object.isRequired,
    // Add more prop types as needed for additional profile information
};

export default Profile;