import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import StarFilled from "D:/Coffe-Project-Excersise/coffee-project/src/assets/Star_fill.svg";
import StarOutline from "D:/Coffe-Project-Excersise/coffee-project/src/assets/Star.svg";

const CoffeeCard = ({
  image,
  name,
  price,
  rating,
  votes,
  popular,
  available,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "#1B1D1F",
        color: "#fff",
        borderRadius: 3,
        width: 300,
        position: "relative",
        border: "none",
        boxShadow:"none"
      }}
    >
      <CardMedia component="img" image={image} height="180" alt={name} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontFamily="DM Sans" fontSize="1rem">{name}</Typography>
          <Chip
            label={`${price}`}
            sx={{
              backgroundColor: "#BEE3CC",
              color: "#000",
              borderRadius: "5px",
              width: "57px",
              height: "28px",
              justifyContent:"center",
              marginRight:"-14px"
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={0.5}>
            <img
              src={rating ? StarFilled : StarOutline}
              alt="star"
              style={{ width: 18, height: 18 }}
            />
            {popular && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#F6C768",
                  color: "#111315",
                  padding: "4px 8px",
                  borderRadius: "10px",
                  fontSize: "0.625rem",
                  fontFamily:"DM Sans",
                  fontWeight: "bold",
                }}
              >
                Popular
              </span>
            )}
            {rating ? (
              <Typography fontFamily="DM Sans" fontSize="12px">
                {rating}{" "}
                <span style={{ color: "#6F757C" }}>({votes} votes)</span>
              </Typography>
            ) : (
              <Typography color="#888">No ratings</Typography>
            )}
          </Box>
          {/* {popular && <Chip label="Popular" size="small" color="warning" />} */}
          {!available && (
            <Chip
              label="Sold out"
              size="small"
              sx={{ color: "#ED735D", backgroundColor: "transparent"  ,  marginRight:"-14px"}}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
