import { Button } from '@mui/material'
import React from 'react'
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io' // Importing left icon

const NavPart1 = () => {
    return (
        <>
            <div className="col-sm-2 navPart1 align-items-center">
                <div className="catWrapper">
                    <Button className='allCatTab'>
                        <span className='icon1 me-2'><IoIosMenu /></span>
                        <span className='allCatTabText text text-uppercase'>All Categories</span>
                        <span className='icon2 ms-2'><IoIosArrowDown /></span>
                    </Button>
                    <div className="sideBarNav">
                        <ul>
                            <li>
                                <Link to='/fashion' className='d-flex align-items-center justify-content-between w-100'>
                                    <span>Fashion</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                                <ul>
                                    <li><Link to='/fashion/men'>Men</Link></li>
                                    <li><Link to='/fashion/women'>Women</Link></li>
                                    <li><Link to='/fashion/accessories'>Accessories</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/electronics' className='d-flex align-items-center justify-content-between'>
                                    <span>Electronics</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                                <ul>
                                    <li><Link to='/electronics/phones'>Phones</Link></li>
                                    <li><Link to='/electronics/laptops'>Laptops</Link></li>
                                    <li><Link to='/electronics/accessories'>Accessories</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/mobile' className='d-flex align-items-center justify-content-between'>
                                    <span>Mobile</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                            </li>
                            <li>
                                <Link to='/grocery' className='d-flex align-items-center justify-content-between'>
                                    <span>Grocery</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                            </li>
                            <li>
                                <Link to='/blog' className='d-flex align-items-center justify-content-between'>
                                    <span>Blog</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='d-flex align-items-center justify-content-between'>
                                    <span>About</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='d-flex align-items-center justify-content-between'>
                                    <span>Contact</span>
                                    <IoIosArrowForward className='ms-2' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavPart1