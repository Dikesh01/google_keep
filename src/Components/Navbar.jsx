import React from 'react'

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import keepIcon from "../assets/keepIcon.svg";

// const drawerWidth = 240;


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Header = styled(AppBar)`
  z-index:1201;
  background:#fff;
  height:70px;
  box-shadow:inset 0 -1px 0 0 #dadce0;
`;

const Typo = styled(Typography)`
    color: #5F6368;
    font-size:22px;
    margin-left:18px;
`


const Navbar=({open, handleDrawer})=> {

  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{
          marginRight: "20px"}}
      >
        <MenuIcon />
      </IconButton>
      <img src={keepIcon} alt='#' style={{width:27}}/>
      <Typo>Keep</Typo>
    </Toolbar>
  </Header>
  )
}

export default Navbar;