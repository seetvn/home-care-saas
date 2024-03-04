import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import BasicTable from "./CarTable";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI


function Carers(props) {
    const {
        selectCarers,
      } = props;
    
      useEffect(selectCarers, [selectCarers]);

      const handleAddNewCarer = () => {
        // Add logic to handle adding new carer here
        console.log("Add New Carer button clicked");
    };
    

    return (
        <Fragment>
          <Grid container justifyContent="flex-end" mb={2}>
              <Button variant="contained" color="primary" onClick={handleAddNewCarer}>
                  Add New Carer
              </Button>
            </Grid>
          <br /> {/* Add line break for spacing */}
          <BasicTable/>
        </Fragment>
      );
    }

Carers.propTypes = {
    selectCarers: PropTypes.func.isRequired,
    };

export default Carers;