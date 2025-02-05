import { Button } from '@mui/material'
import React from 'react'
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-2 navPart1 align-items-center">
                        <Button className='allCatTab'>
                            <span className='icon1 me-2'><IoIosMenu /></span>
                            <span className='allCatTabText text text-uppercase'>All Categories</span>
                            <span className='icon2 ms-2'><IoIosArrowDown /></span>
                        </Button>
                    </div>

                    <div className="col-sm-10 navPart2 d-flex align-items-center justify-content-center">
                        <ul className='list list-inline d-flex ml-auto'>
                            <li className='inline-item me-3'><Link to='/' className='text-decoration-none'>Home</Link>
                                <div className='subMenu'>
                                    <Link to='/home/overview'>Overview</Link>
                                    <Link to='/home/latest'>Latest Updates</Link>
                                </div>
                            </li>
                            <li className='inline-item me-3'><Link to='/fashion' >Fashion</Link>
                                <div className='subMenu'>
                                    <Link to='/fashion/men'>Men</Link>
                                    <Link to='/fashion/women'>Women</Link>
                                    <Link to='/fashion/accessories'>Accessories</Link>
                                </div>
                            </li>
                            <li className='inline-item me-3'><Link to='/electronics' >Electronics</Link>
                                <div className='subMenu'>
                                    <Link to='/electronics/phones'>Phones</Link>
                                    <Link to='/electronics/laptops'>Laptops</Link>
                                    <Link to='/electronics/accessories'>Accessories</Link>
                                </div>
                            </li>
                            <li className='inline-item me-3'><Link to='/mobile' >Mobile</Link></li>
                            <li className='inline-item me-3'><Link to='/grocery' >Grocery</Link></li>
                            <li className='inline-item me-3'><Link to='/blog' >Blog</Link></li>
                            <li className='inline-item me-3'><Link to='/about' >About</Link></li>
                            <li className='inline-item'><Link to='/contact' >Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation