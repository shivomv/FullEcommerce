import { Button } from '@mui/material'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const CountryDropdown = () => {
    return (
        <Button className='countryDropdown'>
            <div className="info d-flex flex-column">
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            {/* <span className='ml-auto'>
                <FaAngleDown style={{ marginLeft: 'auto' }} />
            </span> */}
        </Button>
    )
}

export default CountryDropdown