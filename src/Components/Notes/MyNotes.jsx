import React from 'react'
import Card from '@mui/material/Card';
import { styled } from "@mui/material/styles";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// buttons
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Mycard = styled(Card)`
    width:250px;
    margin:10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: none;
`

function MyNotes({ note }) {
  return (
    <Mycard>
        <CardContent>
            <Typography>{ note.heading }</Typography>
            <Typography>{ note.text }</Typography>
        </CardContent>
        <CardActions>
            <AddAlertOutlinedIcon fontSize='small'/>
            <PersonAddAltOutlinedIcon fontSize='small'/>
            <PaletteOutlinedIcon fontSize='small'/>
            <ImageOutlinedIcon fontSize='small'/>
            <MoreVertOutlinedIcon fontSize='small'/>
        </CardActions>
    </Mycard>
  )
}

export default MyNotes