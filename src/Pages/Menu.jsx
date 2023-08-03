import React from 'react'
import Layout from '../Components/Layout/Layout'
import MenuList from "../data/data"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>

<Box  sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",my:5 }}  >
{MenuList.map((m)=>(
  <Card sx={{maxWidth:"390px" ,display:"flex",m:2}}  >
    <CardActionArea>
      <CardMedia sx={{minHeight:"300px"}} componenet={'image'} src={m.image}    alt={m.name} />
    <CardContent>
      <Typography variant='h5' gutterBottom component={"div"}  sx={{bgcolor:"skyblue"}}>
        {m.name}
      </Typography>

<Typography variant='body2' sx={{bgcolor:"aqua"}}  >
  {m.description}
</Typography>
<Typography variant='body2'sx={{bgcolor:"pink"}}>
  {m.price}
</Typography>


    </CardContent>
    </CardActionArea>
  </Card>
))}

</Box>
    </Layout>
  )
}

export default Menu