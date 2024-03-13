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
        {/* Additional profile information can be added here */}
        </Paper>
    );
}

Profile.propTypes = {
    selectPatients: PropTypes.func.isRequired,
    // Add more prop types as needed for additional profile information
};

export default Profile;