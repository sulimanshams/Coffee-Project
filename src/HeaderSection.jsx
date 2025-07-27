import React from "react";
import {Box} from "@mui/material"
const SectionHeader= () =>{
  return (
    <>
<Box sx={{mt:-147 , ml:100, position:"relative"}}>
    <img 
        src="/vector.svg"
        alt="Vector"
        />
        </Box>
        <Box sx={{display:"inline-block", whiteSpace:"nowrap" ,color:"#FEF7EE", fontSize:"32px" , fontFamily:"'DMSans_18pt-Medium'", marginTop:"-1150px" , marginLeft:"55px",
          position:"absolute"
        }}>
        <h2>Our Collection</h2>
         </Box>
        <Box sx={{color:"#6F757C" , mr:"200px" , width:"700px"}}>
        <p className="text-gray-400 max-w-xl mx-auto mt-3 relative z-10">
       Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
    </Box>
</>
) 
}


export default SectionHeader;
