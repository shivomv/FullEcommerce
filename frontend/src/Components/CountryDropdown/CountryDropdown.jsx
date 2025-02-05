import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';

const CountryDropdown = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
                console.log(response.data.data);
                const indiaCities = response.data.data.find(country => country.iso2 === "IN").cities;
                setLocations(indiaCities);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, []);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSearchTerm(''); // Clear the search term on close
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        handleClose();
    };

    const filteredLocations = locations.filter(location =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Button className='countryDropdown' onClick={handleClickOpen}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>{selectedLocation || 'India'}</span>
                </div>
                <FaAngleDown />
            </Button>
            <Dialog open={open} onClose={handleClose} className='locationModal' PaperProps={{ style: { borderRadius: '15px' } }}>
              <DialogTitle style={{ fontWeight: 'bold' }}>CHOOSE YOUR DELIVERY LOCATION</DialogTitle>
              <DialogContent className='locationModalContent'>
                <div className='searchContainer'>
                <TextField 
                  variant="outlined" 
                  placeholder="Search for locations" 
                  fullWidth 
                  style={{ marginBottom: '20px', borderRadius: '5px', height: '50px'  }} // Increased height for search
                  InputProps={{ style: { height: '50px' } }} // Ensuring the input field is larger
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <ul className='locationList'>
                  {filteredLocations.map((location, index) => (
                    <li className='locationItem' key={index} onClick={() => handleLocationSelect(location)}>
                      {location}
                    </li>
                  ))}
                </ul>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant='contained' color="primary">Close</Button>
              </DialogActions>
            </Dialog>
        </>
    )
}

export default CountryDropdown