import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const Container = styled.div`
  display: flex;
  border: 0px solid red;
  height: 250px;
  width: 900px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding:"10px"
  gap: 30px;
`;
const H4 = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;
const H6 = styled.h3`
  font-size: 17px;
  font-weight: 600;
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
  const divert = useNavigate();
  const Button = {
    backgroundColor: "yellow",
  };
  const handleRoute = () => {
    divert(`/products/${id}`);
  };
  const Addcart = async () => {
    let newobj = {
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
    };

    let data = await axios.post(
      "https://beautiful-calf-wear.cyclic.app/AddToCart",
      newobj
    );
    console.log(data.data);
  };
  return (
    <Container>
      <div style={{ width: "30%" }} onClick={handleRoute}>
        <img src={imgUrl} alt={id} />
      </div>
      <div style={{ padding: "2", width: "40%" }} onClick={handleRoute}>
        <H4>{title}</H4>
        <H6>{brand}</H6>
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
          border: "0px solid black",
          justifyContent: "center",
        }}
      >
        <H4>${price}</H4>
        <button
          onClick={Addcart}
          style={{
            backgroundColor: "yellow",
            padding: "3px",
            fontSize: "14px",
            fontWeight: "700",
            width: "50%",
            borderRadius: "10px",
          }}
        >
          Add to cart
        </button>
      </div>
    </Container>
  );
};

export default Productscard;
