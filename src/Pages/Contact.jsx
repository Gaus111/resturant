import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableCell, TableContainer, TableHead,TableBody, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10,ml:10,mb:3,"@media  (max-width:600px)":{ width:"300px" }  }} >
          <Typography variant='h4' >
            contact my returant
          </Typography>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis ad ex eum quo voluptate odit tempore excepturi distinctio! Consectetur modi rem ipsa. Doloremque esse praesentium quia adipisci perspiciatis vel?</p>
          
           </Box  >
           <Box  sx={{m:3,width:"600px", ml:"80px", "@media (max-width:600px)":{
            width:"300px",
           }}} >
           <TableContainer component={Paper} >
            <Table aria-label="contact label" ></Table>
            <TableHead>
<TableRow>
  <TableCell  sx={{bgcolor:"black",color:"white",width:"2%",textAlign:"center"}} >
    Contact deatail
  </TableCell>
</TableRow>
            </TableHead>
    
            <TableBody>
<TableRow>
  <TableCell>
<SupportAgentIcon sx={{color:"red",pt:1 }} /> 18001801200 (toll free)
  </TableCell>
  </TableRow> 

  <TableRow>
  <TableCell>
<EmailIcon sx={{color:"skyblue",pt:1 }} /> www.email2@gmail.com
  </TableCell>
</TableRow>
  <TableRow>
  <TableCell>
<CallIcon sx={{color:"green",pt:1 }} /> 1234567890
  </TableCell>
</TableRow>

            </TableBody>
           </TableContainer>
           </Box>
    </Layout>
  )
}

export default Contact