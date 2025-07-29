import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const TwoButton =() => {
    const [selected , setSelected] = useState(null)
    return (
        <Box display="flex" gap={2} position="absolute" marginTop="-900px">
            <Button variant="contained"
            onClick={()=>setSelected('btn1')}
            sx={{
                backgroundColor: selected ==='btn1' ? "#4D5562" : "#1B1D1F",
                color: selected === 'btn1'? "#FEF7EE" : "#FEF7EE",
                boxShadow:selected==='btn1'? 1 : 'none',
                border: "none",
                borderRadius:"10px",
                '&:hover':{
                        backgroundColor:selected==='btn1' ? "6F757C" : "4D5562"
                }
            }}
            >
                All Product
            </Button>



              <Button variant="contained"
            onClick={()=>setSelected('btn2')}
            sx={{
                backgroundColor: selected ==='btn2' ? "#4D5562" : "#1B1D1F",
                color: selected === 'btn2'? "#FEF7EE" : "#FEF7EE",
                boxShadow:selected==='btn2'? 1 : 'none',
                border: "none",
                borderRadius:"10px",
                '&:hover':{
                        backgroundColor:selected==='btn2' ? "6F757C" : "4D5562"
                }
            }}
            >
                Available Now
            </Button>
        </Box>
    )
}

export default TwoButton;