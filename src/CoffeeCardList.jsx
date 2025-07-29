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
}

export default CoffeeCardList;