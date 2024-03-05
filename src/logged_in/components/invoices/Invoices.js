import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import BasicTable from "./InvTable";
import Button from "@mui/material/Button"; // Import Button component from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from Material-UI


function Invoices(props) {
    const {
        selectInvoices,
      } = props;
    
      useEffect(selectInvoices, [selectInvoices]);

      const handleAddNewInvoice = () => {
        // Add logic to handle adding new carer here
        console.log("Add New Invoice button clicked");
    };
    

    return (
        <Fragment>
          <Grid container justifyContent="flex-end" mb={2}>
              <Button variant="contained" color="primary" onClick={handleAddNewInvoice}>
                  Add New Invoice
              </Button>
            </Grid>
          <br /> {/* Add line break for spacing */}
          <BasicTable/>
        </Fragment>
      );
    }

Invoices.propTypes = {
    selectInvoices: PropTypes.func.isRequired,
    };

export default Invoices;