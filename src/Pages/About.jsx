import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
<Box sx={{
  p:2,
my:15,
textAlign:"center",
"& h4":{
  fontweight:"bold",
  my:2,
  fontSize:"1.51rem"
},
"& p":{
  textAlign:"justify"
},

"@media (max-width:600px)":{
  mt:0
},
"& h4":{
  fontSize:"2rem",
}

}}  >
  <Typography  variant="h4" >
    Welcome to my  Resturant
  </Typography>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam aliquid, libero doloribus officia obcaecati est reiciendis. Corporis laborum, dolor eveniet quam omnis deleniti mollitia ut est reiciendis esse explicabo, debitis quidem quae, magnam provident accusamus tempore corrupti! Aliquam odio quidem, laboriosam impedit dolore sit modi necessitatibus inventore consequatur accusantium nisi, explicabo quos similique animi totam cum expedita ratione qui, facere voluptatem numquam et adipisci! Autem ullam, dolores totam quidem mollitia expedita porro, voluptate iusto corporis non tempora. Magni exercitationem vel ab nesciunt in aperiam autem, deleniti quidem commodi debitis numquam consectetur eum expedita repellendus nemo qui, quasi recusandae molestiae.</p>
<br />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatum labore minima non obcaecati unde corporis laboriosam nihil incidunt sunt quam possimus fugit porro voluptate, neque reiciendis magni at atque fugiat aspernatur doloribus iusto distinctio vel maxime. Blanditiis itaque ut ipsam nam fugiat beatae necessitatibus et adipisci, corrupti dignissimos aspernatur unde autem ab aut eveniet possimus tenetur, nisi dolorum tempora ducimus veritatis atque laudantium pariatur minus. Molestias aliquam architecto, quas, perferendis dolor porro vitae sapiente sequi quia expedita dolore incidunt quod nisi rerum dolorem a suscipit laborum consequatur! Labore aspernatur reprehenderit porro unde officia vero quasi aperiam adipisci, nulla laudantium.</p>
</Box>

    </Layout>
  )
}

export default About