import React, { useState } from 'react'

import { Paper, IconButton } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
     const [searchTerm, setsearchterm ] = useState('');
   const navigate= useNavigate()
  const handelSubmit= (e)=>{
    e.preventDefault(); 
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchterm('');
    }
  }

  return (
    <Paper
    component="form"
    onSubmit={handelSubmit}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{ sm:5 }
    }}
    >
    <input 
    className="search-bar"
    placeholder='Search...'
    value={searchTerm}
    onChange={(e)=>setsearchterm(e.target.value)}
    style={{border:'none'}}
    />    
    <IconButton type="submit"  sx={{p:'10px', color:'red'}}>

        <SearchIcon />
    </IconButton>
    </Paper>
  )
}

export default Searchbar