import React, { useState, useRef, useContext } from 'react'
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { DataContext } from '../../context/DataProvider';


const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    width:600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    padding:10px 15px;
    border-radius:8px;
    border-color:#e0e0e0;
    margin:auto;
    min-height:30px;
`

 const noteObj = {
    id:'',
    heading: '',
    text: '',
 }
function Form() {

    const [ showTextField, setShowTextField ] = useState(false);
    const [addNote, setAddNote] = useState(noteObj);

    const containerRef = useRef();
    const { notes, setNotes } = useContext(DataContext);

    function onTextAreaClick() {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px'
    }

    function handleClickAway(){
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px'
    }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref={containerRef}>
            { showTextField &&
                    <TextField 
                    placeholder='Title'
                    variant='standard'
                    InputProps={{ disableUnderline: true}}
                    style={{ marginBottom:10}}
                />
            }
            <TextField 
                placeholder='Take a note...'
                multiline
                maxRows={Infinity}
                variant='standard'
                InputProps={{ disableUnderline: true}}
                onClick={onTextAreaClick}
            />
        </Container>
    </ClickAwayListener>
  )
}

export default Form