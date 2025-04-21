import React from 'react'
import { Divider, Box } from '@mui/material';
import BlogList from './BlogList';


const Intro = () => {
  return (
    <div>
        <h1>Welcome to My Blog</h1>
        <p>Here, I share my thoughts and experiences on various topics.</p>
        <Box>
          <BlogList />
        </Box>
        
    </div>

  )
}

export default Intro
