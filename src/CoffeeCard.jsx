import React from "react";


const Card =({name , price , image , rating , votes , popular , available}) => {
        return (
            <div style={{
                backgroundColor:"#1B1D1F",
                borderRadius:"10px",
                padding:"10px",
                width:"200px",
                color:"#1B1D1F"
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
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <h style={{margin:"5px 0"}}>{name}</h>
                        <span style={{
                            backgroundColor:"#b9f5d0",
                            color:"#000",
                            padding:"62px 6px",
                            borderRadius:"5px",
                            fontSize:"13px" 

                        }}>
                        ${!isNaN(Number(price)) ? Number(price).toFixed(2) : "0.00"}
                        </span>
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