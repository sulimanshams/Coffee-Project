import React, { useEffect, useState } from "react";
import Card from "./CoffeeCard";
import axios from "axios"


const CoffeeCardList =  () => {
    const [coffeeData , setCoffeeData] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(()=> {
        const fetchCoffee = async() => {
            try {
                const response = await axios.get("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");
                setCoffeeData(response.data);
            }catch(error){
                console.error("The error is : " , error);
            }finally {
                setLoading(false);
            }
        };
        fetchCoffee();
    }, []);
    if(loading) return <p style={{color:"white" , textAlign:"center"}}>Loading...</p>
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(3 , 1fr)",
            gap:"10px",
            flexWrap:"wrap",
            // justifyContent:"center",
            // backgroundColor:"#121212",
            padding:"0px",
            position:"relative",
            // marginTop:"-190px",
                rowGap:"20px",
                columnGap:"2px",
                zIndex:0
                  }}>
            {coffeeData.slice(0 , 6).map((coffee) => {
                   return <Card key={coffee.id} {...coffee}/>
            })}
        </div>
    )
}

export default CoffeeCardList;