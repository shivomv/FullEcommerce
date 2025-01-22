import { Button } from '@mui/material'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = () => {
  return (
    <div className="headerSearch mx-3">
      <input type="text" placeholder='Search products' />
      <Button className='searchIcon'>
        <IoIosSearch />
      </Button>
    </div>
  )
}

export default SearchBar