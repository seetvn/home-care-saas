import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import BasicTable from "./CarTable";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI
import { useHistory } from 'react-router-dom'; // allows re-routing
import { useLocation } from 'react-router-dom';// allows data to be passed among different pages


function Carers(props) {
    const {
        selectCarers,
      } = props;
      const history = useHistory();
      const location = useLocation();
      const formData = location.state ? location.state.formData : {emailAddress:'joebiden@potus.us',phoneNumber:'074355780',homeAddress:'queertown',id:'2344'};
      
      useEffect(selectCarers, [selectCarers]);

      const handleAddNewCarer = () => {
        // Add logic to handle adding new carer here
        console.log("Add New Carer button clicked");
        history.push("/c/new-carer-page" ); // Specify the path of the new page
    };
    // --debug function---
  //   const test_func = () => {
  //     console.log(formData);
    
  // };

    return (
        <Fragment>
          <Grid container justifyContent="flex-end" mb={2}>
              <Button variant="contained" color="primary" onClick={handleAddNewCarer}>
                  Add New Carer
              </Button>
            </Grid>
          <br /> {/* Add line break for spacing */}
          <BasicTable carersData={[formData]}/>
        </Fragment>
      );
    }

Carers.propTypes = {
    selectCarers: PropTypes.func.isRequired,
    };

export default Carers;