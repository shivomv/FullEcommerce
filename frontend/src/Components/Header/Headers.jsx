import React from 'react'
import logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import CountryDropdown from '../CountryDropdown/CountryDropdown'
import { FiUser } from 'react-icons/fi'
import { IoBagOutline } from 'react-icons/io5'
import SearchBar from './SearchBar/SearchBar'
import Navigation from './Navigation/Navigation'

const Headers = () => {
    return (
        <div className='headerWrapper'>
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className='mb-0 pt-0 text-center'>
                        For inquiries, contact us at: info@example.com or call us at (123) 456-7890. Check out our latest offers!
                    </p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-sm-8 d-flex align-items-center part2 m-auto">
                            <CountryDropdown />

                            {/* Header serach start */}
                            <SearchBar />
                            {/* Header serach end */}

                        </div>
                        <div className='col-sm-2'>
                            <div className="headerCart d-flex align-items-end part3 m-auto">
                                <Button className='userIcon circle'>
                                    <FiUser />
                                </Button>
                                <div className="cartTab ml-auto d-flex align-items-center">
                                    <span className='cartPrice ms-4 me-2'>₹500</span>
                                    <div className=' ml-2 cartIconWrapper'>
                                        <Button className='cartIcon circle'>
                                            <IoBagOutline />
                                        </Button>
                                        <span className='cartCount d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />
        </div>
    )
}

export default Headers