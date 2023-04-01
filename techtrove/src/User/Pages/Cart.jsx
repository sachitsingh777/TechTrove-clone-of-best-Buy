import { Link } from "react-router-dom"
import "./Cart.css"
import { AiTwotoneTag, AiOutlineGift } from 'react-icons/ai'
export const Cart = () => {
    return (
        <div>
            <div style={{ display: "flex", height: '70px', justifyContent: "space-evenly", backgroundColor: 'rgba(240,242,244)' }}>
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
                    <div className="parentdiv">
                        <h2>Your Cart</h2>
                        <div className="yourCart">
                            <div className="bestBuy">
                                <h3>BEST BUY</h3>
                                <h1>totaltech</h1>
                            </div>
                            <div >
                                <h2 style={{ fontSize: '15px', fontWeight: 'bold' }}>Unlock up to $167.761 See Disclaimer1in savings on AppleCare+</h2>
                                <p>You’ll also get discounted services, extended returns, up to 24 months protection on most</p>
                                <p>purchases and more with an active membership.</p>
                            </div>
                            <button className="button" style={{ height: '30px' }}>Unlock Saving</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', height: '70px', alignItems: 'center', margin: 'auto' }}>
                        <AiTwotoneTag />
                        <h2>Special Offers</h2>
                        <p style={{ fontSize: '15px' }}>We found offers available based on items in your cart!</p>
                        <Link style={{ color: 'blue' }}>See all</Link>
                    </div>
                    <div className="cartDiv">
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="orderSummary">
                    <h2>Order Summary</h2>
                    <hr />
                    <p>Item Total</p>
                    <p>Store Pickup</p>
                    <Link className="link">Estimeted Sales Tax</Link>
                    <hr />
                    <h4>Total</h4>
                    <button>Checkout</button>
                    <button>PayPal <h4>checkout</h4></button>

                    <p>My Best Buy® members enjoy exclusive offers & free shipping with no minimum purchase.</p>
                    <Link className="link">Sign in or create an account now</Link>
                    <hr></hr>
                    <h5>Apply today,shop today.</h5>
                    <div>
                        <img src="https://www.bestbuy.com/~assets/bby/_com/MBBCC_MBBVC_Contactless_Dual_Yellow_Edge_RGB-a32c353844fb660dd08157fcccf95d42.png"></img>
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
                    <hr></hr>
                    <div>
                        <h2>
                            Looking for a lease to own option?
                        </h2>
                        <p>Enjoy the tech you want today</p>
                    </div>
                    <div>
                        <h2>
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