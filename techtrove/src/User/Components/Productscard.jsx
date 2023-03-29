import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  height: 250px;
  width: 900px;
  margin: 20px;
  gap: 20px;
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
  return (
    <Container>
      <div>
        <img src={imgUrl} alt={id} />
      </div>
      <div>
        <p>{title}</p>
        <h4>{brand}</h4>
        <p>
          `${rate}(${review})`
        </p>
        <p>{`Pickup:${
          p1 ? p1 : "Order now for pickup on Wed, Apr 19 at Aiea"
        }`}</p>
        <p>{`Online:${p2 ? p2 : "Not Available"}`}</p>
      </div>
      <dir>
        <h1>{`$${price}`}</h1>
        <button style={{ backgroundColor: "yellow" }}>Add to cart</button>
      </dir>
    </Container>
  );
};

export default Productscard;
