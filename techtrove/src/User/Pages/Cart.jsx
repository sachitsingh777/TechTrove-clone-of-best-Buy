import { Link } from "react-router-dom"
import { getCartData } from '../Redux/CartReducer/action'
import { useDispatch } from 'react-redux'
import { CartProducts } from '../Components/CardProducts'

import "./Cart.css"
import { AiTwotoneTag, AiOutlineGift } from 'react-icons/ai'
import { useEffect, useState } from "react"
export const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [item, setItem] = useState(0)
    const [cartData, setCartData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        getCartData().then((res)=>{
            // console.log(res.data)
            setCartData(res.data)
        })
    }, [])
    const handleCheckout=()=>{
        alert("Product Order Successfull!")
    }
    console.log(cartData)
    return (
        <div className="parentdiv">
            <div style={{ display: "flex", height: '100px', justifyContent: "space-evenly", backgroundColor: 'rgba(240,242,244)' }}>
                <img src="https://www.bestbuy.com/~assets/bby/_com/updated-microsoft-image-ea7d2787f444188a223e599cf09fc63b.jpg" />
                <div>
                    <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>You're going to need Word, Excel and PowerPoint.</h1>
                    <h6 style={{ fontSize: '12px' }}>1 year of Microsoft 365 with this qualifying product today and get 3 bonus months</h6>
                    <p style={{ fontSize: '12px', color: 'grey' }}>Auto-Renewal Details: Savings applies to initial purchase only.</p>
                </div>
                <select style={{ height: "60%", marginTop: '12px', border: '1px solid grey', padding: "5px", borderRadius: '4px' }}>
                    <option value="">1 Person - PC/Mac - $69.99/yr </option>
                    <option value="">6 Person - PC/Mac - $99.99/yr </option>
                </select>
                <button className="button">Add to Cart</button>
            </div>
            <div className="firstDiv">
                <div className="secondDiv">
                    <h2>Your Cart</h2>
                    <div className="parentdiv1" >
                        <div className="yourCart">
                            <div className="bestBuy">
                                <h3>BEST BUY</h3>
                                <h1>totaltech</h1>
                            </div>
                            <div>
                                <h5 >Unlock up to $167.761 See Disclaimer1in savings on AppleCare+</h5>
                                <p>You’ll also get discounted services, extended returns, up to 24 months protection on most</p>
                                <p>purchases and more with an active membership.</p>
                            </div>
                            <button className="button" style={{ height: '30px' }}>Unlock Saving</button>
                        </div>
                    </div>

                    <div className="specialoffers">
                        <div>
                            <AiTwotoneTag />
                            <h2>Special Offers</h2>
                        </div>
                        <p style={{ fontSize: '15px' }}>We found offers available based on items in your cart!</p>
                        <Link style={{ color: 'blue' }}>See all</Link>
                    </div>
                    <div className="cartDiv">
                        <img src="" alt="" />
                    </div>
                    <div className="productsdiv" style={{marginBottom:'25px'}}>
                        {
                            cartData.length > 0 && cartData.map((ele) => {
                                return <CartProducts key={ele.id} {...ele} />
                            })
                        }
                    </div>
                </div>
                <div className="orderSummary">
                    <h2>Order Summary</h2>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Item Total</p>
                        <p>{item}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <p>Store Pickup</p>
                        <p>Free</p>
                    </div>
                    <Link className="link">Estimeted Sales Tax</Link>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>Total</h4>
                        <h4>${totalPrice}</h4>
                    </div>
                    <button onClick={handleCheckout}>Checkout</button>
                    <button onClick={handleCheckout}>PayPal <h4>checkout</h4></button>

                    <p>My Best Buy® members enjoy exclusive offers & free shipping with no minimum purchase.</p>
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
                                on your first day of purchases when approved for the My Best Buy® Credit Card.
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
                        <h2>
                            Looking for a lease to own option?
                        </h2>
                        <p>Enjoy the tech you want today</p>
                    </div>
                    <hr />
                    <div className="gift">
                        <h2 style={{ display: 'flex' }}>
                            <AiOutlineGift />
                            Buying a gift for someone special?
                        </h2>
                        <p>Gift options can be added in checkout. </p>
                    </div>
                </div>

            </div>
        </div>
    )
}