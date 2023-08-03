import React, { useState } from "react";
import { AppBar, Box, Divider, IconButton, SwipeableDrawer, Toolbar, Typography,Divi } from "@mui/material";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../../Styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../img/logo.svg"
const Header = () => {
  const [mobileopen, setmobileopen] = useState(false);
  
  //handle menu Click
  const handleDrawToggle = () => {
    setmobileopen(!mobileopen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawToggle} sx={{ textAlign: "center" }}>
       
       <Typography
        color={"gold"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 5 , my:"2px" }}
      >

        
      </Typography>
<Divider/>
      <ul className="mobile_navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"gold"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 5 }}
            >
              {/* <FastfoodIcon />
              My Rest_tur_ant website */}
            
            <img src={logo} alt="logo" height={80} />
            
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation_menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <SwipeableDrawer  
          
          variant="temporary"
          open={mobileopen}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"200px"

          }}}
          onclose={handleDrawToggle}
          >
            {drawer}
          </SwipeableDrawer>
        </Box>
<Box   >

<Toolbar/>
</Box>
      </Box>
    </div>
  );
};

export default Header;
