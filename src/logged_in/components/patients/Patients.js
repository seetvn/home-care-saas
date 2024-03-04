import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import BasicTable from "./PatTable";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI


function Patients(props) {
    const {
        selectPatients,
      } = props;
    
      useEffect(selectPatients, [selectPatients]);

      const handleAddNewPatients = () => {
        // Add logic to handle adding new carer here
        console.log("Add New Patients button clicked");
    };
    

    return (
        <Fragment>
          <Grid container justifyContent="flex-end" mb={2}>
              <Button variant="contained" color="primary" onClick={handleAddNewPatients}>
                  Add New Patient
              </Button>
            </Grid>
          <br /> {/* Add line break for spacing */}
          <BasicTable/>
        </Fragment>
      );
    }

Patients.propTypes = {
    selectPatients: PropTypes.func.isRequired,
    };

export default Patients;