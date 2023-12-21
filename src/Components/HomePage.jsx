import React from 'react'
// import Box from '@mui/material/Box';
import SideDrawer from './SideDrawer'
import Notes from './Notes/Notes'

function HomePage() {
  return (
    <div style={{ display: 'flex', width: '100'}}>
        <SideDrawer />
        <Notes />
    </div>
  )
}

export default HomePage