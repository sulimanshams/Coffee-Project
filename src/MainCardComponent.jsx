import React from "react";
import SectionHeader from "./HeaderSection";
import CoffeeCardList from "./CoffeeCardList";


const BigCard = () => {
    return(
        <>
        <div style={{
            width:"1435px",
            height:"1200px",
              backgroundColor: "#1B1D1F",
              margin:"100px auto",
              borderRadius:"12px",
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
              position:"absolute",
              marginTop:"-188px",
              marginLeft:"120px"
        }}>
                          <SectionHeader />  
                          
        </div>
        <div>
             <CoffeeCardList />
        </div>
        </>
    )
}



export default BigCard;