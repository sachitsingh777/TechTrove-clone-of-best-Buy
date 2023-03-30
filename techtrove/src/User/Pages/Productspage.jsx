import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Productscard from "../Components/Productscard";
import { getData } from "../Redux/productReducer/action";
export const Container = styled.div`
  background-color: #fed9ff;
  width: 20%;
  overflow-y: scroll
  text-align: center;
  height: "100px";
  overflowY: "scroll"
  padding: 20px;
`;
const Productspage = () => {
  const data = useSelector((store) => store.productreducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);
  console.log(data);
  return (
    <div style={{ display: "flex", height: "auto" }}>
      <div style={{ height: "600px", width: "20%", overflowY: "scroll" }}>
        <h4>Filter</h4>
        <h6>Filter by Brand</h6>
        <input type="checkbox" value={"Amazon"} />
        <label htmlFor="">Amazon</label>
        <hr />
        <h6>Filter by Rating</h6>
        <input type="checkbox" value={"Amazon"} />
        <label htmlFor="">4 Above</label>
        <hr />
        <h6>Filter by Category</h6>
        <input type="checkbox" value={"Amazon"} />
        <label htmlFor="">4 Above</label>
      </div>
      <div>
        {data === undefined ? (
          <h1 style={{ color: "red" }}> Loading Error</h1>
        ) : (
          data.map((el, ind) => {
            return <Productscard key={el.id} {...el} />;
          })
        )}
      </div>
    </div>
  );
};

export default Productspage;
