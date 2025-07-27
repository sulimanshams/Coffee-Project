import React from "react";
import {Box} from "@mui/material"
const SectionHeader= () =>{
  return (
    <>
<Box sx={{mt:-147 , ml:92}}>
    <img 
        src="/vector.svg"
        alt="Vector"
        />
        </Box>
        <Box sx={{color:"#FEF7EE", fontSize:"32px" , fontFamily:"'DM Sans', sans-serif", marginTop:"-1010px"}}>
        <h2>Our Collection</h2>
         </Box>
        <Box>
        <p className="text-gray-400 max-w-xl mx-auto mt-3 relative z-10">
       Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
    </Box>
</>
)
}


export default SectionHeader;
