import React from "react";
import TwoButton from "./TwoButton";
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
        <Box sx={{display:"inline-block", whiteSpace:"nowrap" ,color:"#FEF7EE", fontSize:"32px" , fontFamily:"'DMSans_18pt-Medium'", marginTop:"-1186px" , marginLeft:"55px",
          position:"absolute"
        }}>
        <h2>Our Collection</h2>
         </Box>
        <Box sx={{color:"#6F757C" , mr:"200px" , width:"650px", fontSize:"17px" , textAlign:"center" , mx:"auto" , mt:-132 , ml:"-620px" , letterSpacing:1 , position:"relative"}}>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees <br /> from
          different roast types and origins, expertly roasted in small <br /> batches 
          and shipped fresh weekly.</p>
    </Box>

          <TwoButton />
</>
) 
}


export default SectionHeader;
