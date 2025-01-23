import { Button } from '@mui/material'
import React from 'react'
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3 navPart1 align-items-center">
                        <Button className='allCatTab'>
                            <span className='icon1 me-2'><IoIosMenu /></span>
                            <span className='allCatTabText text text-uppercase'>All Categories</span>
                            <span className='icon2 ms-2'><IoIosArrowDown /></span>
                        </Button>
                    </div>

                    <div className="col-sm-9 navPart2 d-flex align-items-center justify-content-center">
                        <ul className='list list-inline d-flex ml-auto'> 
                            <li className='inline-item me-3'><Link to='/' className='text-decoration-none'>Home</Link></li>
                            <li className='inline-item me-3'><Link to='/fashion' >Fashion</Link></li>
                            <li className='inline-item me-3'><Link to='/electronics' >Electronics</Link></li>
                            <li className='inline-item me-3'><Link to='/mobile' >Mobile</Link></li>
                            <li className='inline-item me-3'><Link to='/grocery' >Grocery</Link></li>
                            <li className='inline-item me-3'><Link to='/blog' >Blog</Link></li>
                            <li className='inline-item'><Link to='/contact' >Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation