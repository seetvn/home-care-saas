// NewCarerPage.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import Button from "@mui/material/Button"; // Import Button component from Material-UI

function NewCarerPage() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        phoneNumber: '',
        emailAddress: '',
        homeAddress: '',
        id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass form data as props when navigating to the other page
        history.push({
            pathname: "/c/carers",
            state: { formData: formData }
        });
    };

    const goBack = () => {
        history.push("/c/carers");
    };

    return (
        <>
            <div>
                <h2>Add New Carer</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="emailAddress">Email Address:</label>
                        <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="homeAddress">Home Address:</label>
                        <input type="text" id="homeAddress" name="homeAddress" value={formData.homeAddress} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="id">ID:</label>
                        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Button variant="contained" color="primary" onClick={goBack}>
                Go back
            </Button>
        </>
    );
}

export default NewCarerPage;
