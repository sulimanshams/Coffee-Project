import React from "react";


const Card =({name , price , image , rating , votes , popular , available}) => {
            
    const extractNumber = (str) => {
    const match = str.match(/[\d.]+/);
      return match ? match[0] : null;
    }
            const numberPart= extractNumber(price);
            const displayPrice= numberPart && !isNaN(Number(numberPart)) ? Number(numberPart).toFixed(2) : "0.00"
        return (
            <div style={{
                backgroundColor:"#1B1D1F",
                borderRadius:"12px",
                padding:"12px",
                width:"300px",
                color:"#1B1D1F", 
                fontFamily:"sans-serif",
                display:"flex",
                flexDirection:"column",
                gap:"1px"
            }}>
                    <div style={{position:"relative"}}>
                        <img src={image} alt={name} style={{width:"100%" ,  borderRadius:"10px"}}/>
                        {popular && (
                            <span style={{
                                position:"absolute",
                                top:"8px",
                                left:"8px",
                                backgroundColor:"#FDD446",
                                color:"#000",
                                fontSize:"12px",
                                padding:"2px 6px",
                                borderRadius:"6px"
                            }}>
                                Popular
                            </span>
                        )}
                         <span style={{
                            backgroundColor:"#b9f5d0",
                            color:"#000",
                            padding:"4px 8px",
                            borderRadius:"5px",
                            fontSize:"13px", 
                            position:"absolute",
                            marginTop:"200px",
                            marginLeft:"-50px"

                        }}>
                                    ${displayPrice}
                        </span>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h3 style={{margin:"5px 0" , color:"#fff"}}>{name}</h3>
                       
                    </div>
                    <div style={{marginTop:"5px" , fontSize:"13px" ,color:available ? "#fff" :"red"}}>
                            {rating ? (
                                <>
                                ⭐ {rating} <span style={{ color: "#aaa" }}>({votes} votes)</span>
                                </>
                            ) : (
                                <>
                                    <span style={{ color: "#666" }}>☆ No ratings</span>  
                                </>
                            )}
                    </div>
                      {!available && <div style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>Sold out</div>}
            </div>
        )
}

export default Card;