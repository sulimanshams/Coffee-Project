import React from "react";
import TwoButton from "./TwoButton";
import {Box} from "@mui/material"
const SectionHeader= () =>{
  return (
    <>
<Box sx={{mt:-111 , ml:48, position:"absolute"}}>
    <img 
        src="/vector.svg"
        alt="Vector"
        width="340"
        />
        </Box>
        <Box sx={{display:"inline-block", whiteSpace:"nowrap" ,color:"#FEF7EE", fontFamily:"DM Sans",fontSize:"2rem" , marginTop:"-905px" , marginLeft:"20px",
          position:"absolute"
        }}>
        <h2>Our Collection</h2>
         </Box>
        <Box sx={{lineHeight:"27px",color:"#6F757C" , mr:"200px" , width:"650px", fontSize:"1rem" ,fontFamily:"DM Sans", textAlign:"center" , mx:"auto" , mt:-94 , ml:"426px" , letterSpacing:1 , position:"relative"}}>
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
