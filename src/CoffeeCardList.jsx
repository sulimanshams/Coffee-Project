import React, { useEffect, useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";

const CoffeeGrid = () => {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      )
      .then((res) => setCoffeeList(res.data.slice(0, 6))) // فقط ۶ کارت
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box bgcolor="#111315" minHeight="100vh" py={6}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {coffeeList.map((coffee, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CoffeeCard {...coffee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoffeeGrid;
