import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';


// imported Components
import Form from './Form';
import MyNotes from './MyNotes';
import { DataContext } from '../../context/DataProvider';



const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

function Notes() {
    const { notes } = useContext(DataContext);
    // console.log(notes);
  return (
    <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Form />
            <Grid container style={{ marginTop: 20}}>
            {
                notes.map(note=>(
                    <Grid item>
                    <MyNotes note={note}/>
                    </Grid>
                ))
            }
             </Grid>
        </Box>
    </Box>

  )
}

export default Notes