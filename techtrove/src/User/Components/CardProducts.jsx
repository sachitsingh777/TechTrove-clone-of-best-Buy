import { Button, Divider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";
import { CARTDeleteProduct } from "../Redux/CartReducer/Action";

export const CartProducts = ({
  brand,
  category,
  id,
  imgUrl,
  rate,
  review,
  price,
  title,
  Remove,
}) => {
  // console.log("running  cart compoennets")
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const RemoveProductitem = (id) => {
    dispatch(CARTDeleteProduct(id));
    Remove();
  };
  useEffect(() => {
    setTotalAmount(qty * price);
  }, [qty]);

  //  useEffect(()=>{

  //  },[])

  // const RemoveProduct = async (id) => {
  //   await axios
  //     .delete(`https://beautiful-calf-wear.cyclic.app/AddToCart/${id}`)
  //     .then(() => {
  //       console.log(`Product ${id} removed successfully`);
  //     })
  //     .catch((error) => {
  //       console.error(`Error removing product ${id}:`, error);
  //     });
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottom: "1px solid gray",
        padding: "20px",
      }}
    >
      <img src={imgUrl} style={{ width: "20%" }} alt="img" />
      <div
        style={{
          width: "30%",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          lineHeight: "30px",
        }}
      >
        <h2 style={{ marginBottom: "5px" }}>{brand}</h2>
        <h6>{title}</h6>
        <div>
          {rate} {review}
        </div>
      </div>
      <div
        style={{
          border: "1px solid grey",
          borderRadius: "4px",
          height: "20px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          fontSize: "25px",
          fontWeight: "bold",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            setQty(qty - 1);
          }}
          style={{ fontSize: "40px" }}
        >
          -
        </button>
        <button>{qty}</button>
        <button
          onClick={() => {
            setQty(qty + 1);
          }}
          style={{ fontSize: "30px" }}
        >
          +
        </button>
      </div>
      <h4 style={{ fontSize: "30px" }}>${totalAmount}</h4>
      <Button onClick={() => RemoveProductitem(id)}> Remove </Button>
    </div>
  );
};
