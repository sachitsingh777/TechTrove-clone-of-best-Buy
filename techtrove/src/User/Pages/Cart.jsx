import { Link, useNavigate } from "react-router-dom";
import {
  CARTDeleteProduct,
  CARTGetProduct,
  getCartData,
} from "../Redux/CartReducer/Action";
import { useDispatch, useSelector } from "react-redux";

import { CartProducts } from "../Components/CardProducts";

import "./Cart.css";
import { AiTwotoneTag, AiOutlineGift } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
export const Cart = () => {
  const [remove, setRemove] = useState(true);
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.cartReducer);

  console.log(cartData);

  const navigate = useNavigate();
  const CheckOut = () => {
    axios
      .post("https://json-server-bestbuy.onrender.com/OrderDetail", cartData)
      .then((response) => {
        console.log("Cart data added to orders successfully");
        console.log(response.data); // response data from server
      })
      .catch((error) => {
        console.error("Error adding cart data to orders:", error);
      });
    navigate("/checkout");
  };

  const Remove = () => {
    setRemove(!remove);
  };

  useEffect(() => {
    dispatch(CARTGetProduct);
  }, [remove]);

  const totalCartPrice = cartData.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
  // console.log(remove);
  return (
    <div className="parentdiv">
      <div className="firstDiv">
        <div className="secondDiv">
          <h2>Your Cart</h2>
          <div className="parentdiv1">
            <div className="yourCart">
              <div className="bestBuy">
                <h3>Tech Trove</h3>
                <h1>totaltech</h1>
              </div>

              <button className="button" style={{ height: "30px" }}>
                Unlock Saving
              </button>
            </div>
          </div>

          <div className="cartDiv">
            <img src="" alt="" />
          </div>
          <div className="productsdiv" style={{ marginBottom: "25px" }}>
            {cartData.length > 0 &&
              cartData.map((ele) => {
                return <CartProducts key={ele.id} {...ele} Remove={Remove} />;
              })}
          </div>
        </div>
        <div className="orderSummary">
          <h2>Order Summary</h2>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Item Total</p>
            <p>{cartData.length}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Store Pickup</p>
            <p>Free</p>
          </div>
          <Link className="link">Estimeted Sales Tax</Link>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Total</h4>
            <h4>${totalCartPrice}</h4>
          </div>
          <button onClick={CheckOut}>Checkout </button>

          <p>
            My Best Buy® members enjoy exclusive offers & free shipping with no
            minimum purchase.
          </p>
          <Link className="link">Sign in or create an account now</Link>
          <hr></hr>
          <h5>Apply today,shop today.</h5>
          <div>
            <div>
              <img src="https://www.bestbuy.com/~assets/bby/_com/MBBCC_MBBVC_Contactless_Dual_Yellow_Edge_RGB-a32c353844fb660dd08157fcccf95d42.png"></img>
            </div>
            <div>
              <p>
                <h6>10%back in reward</h6>
                on your first day of purchases when approved for the My Best
                Buy® Credit Card.
              </p>
              <p>
                <h6>$104.63/month*</h6>
                suggested monthly payments with
                <h6>12 month financing</h6>
                on this purchase of $1,255.50
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="gift">
            <h2>Looking for a lease to own option?</h2>
            <p>Enjoy the tech you want today</p>
          </div>
          <hr />
          <div className="gift">
            <h2 style={{ display: "flex" }}>
              <AiOutlineGift />
              Buying a gift for someone special?
            </h2>
            <p>Gift options can be added in checkout. </p>
          </div>
        </div>
      </div>
    </div>
  );
};
