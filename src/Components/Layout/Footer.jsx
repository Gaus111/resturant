import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
<Box sx={{textAlign:"center", bgcolor:"green", color:"white",p:2, "@media (max-width:300px)":{width:"60px"}}} >

 <Box sx={{my:3, "& svg":{
  fontsize:"60px",
  cursor:"pointer",
  mr:2,
 },
 "& svg:hover":{
  color:"red",
  transform:"translateX(5px)",
  transition:"all 400ms"
 }
 }} >
 {/* footer icons  */}
<InstagramIcon/>
<TwitterIcon/>
<GitHubIcon/>
<YouTubeIcon/>
 </Box>
 
  <Typography variant="h5" sx={{"@media (max-width:600px)":{
    fontSize:"1rem",
  },}} >
    All Right Reserved &copy; Tech info YT  
  </Typography>
</Box>

    </>
  )
}

export default Footer