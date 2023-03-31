import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  height: 250px;
  width: 900px;

  gap: 10px;
`;
const H4 = styled.h3`
  font-size: 20px;
  font-weight: 3px;
`;
const H6 = styled.h3`
  font-size: 17px;
  font-weight: 3px;
`;
const Productscard = ({
  imgUrl,
  title,
  rate,
  review,
  top,
  save,
  id,
  price,
  category,
  brand,
  p1,
  p2,
}) => {
  // "id": 25,
  // "imgUrl": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15621/15621549.jpg",
  // "title": "Google Nest Cam Wire-Free Indoor/Outdoor Security Camera",
  // "rate": "⭐⭐⭐⭐",
  // "review": 627,
  // "top": "Top Deal",
  // "save": "SAVE $50",
  // "price": 339.99,
  // "category": "electronic",
  // "brand": "google"
  const Button = {
    backgroundColor: "yellow",
  };
  return (
    <Container>
      <div style={{ width: "30%" }}>
        <img src={imgUrl} alt={id} />
      </div>
      <div style={{ padding: "2", width: "40%" }}>
        <H4>{title}</H4>
        <h4>{brand}</h4>
        <p>{`${rate}(${review})`}</p>
        <p>{`Pickup:${
          p1 ? p1 : "Order now for pickup on Wed, Apr 19 at Aiea"
        }`}</p>
        <p>{`Online:${p2 ? p2 : "Not Available"}`}</p>
      </div>
      <div
        style={{
          width: "30%",
          alignItems: "center",
          margin: "auto",
          border: "1px solid black",
        }}
      >
        <H4>${price}</H4>
        <button style={Button}>Add to cart</button>
      </div>
    </Container>
  );
};

export default Productscard;
