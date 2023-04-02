import { useEffect, useState } from "react"

export const CartProducts = ({ brand, category, id, imgUrl, rate, review, price, title }) => {
    // console.log("running  cart compoennets")
    const [qty, setQty] = useState(1)
    const [totalAmount,setTotalAmount]=useState(0)
    useEffect(()=>{
        setTotalAmount(qty*price)
    },[qty])
    return (
        <div style={{ display: 'flex' ,justifyContent:'space-around',alignItems:'center'}}>
            <img src={imgUrl} style={{width:'20%'}} />
            <div style={{ width: "30%", display: 'flex', flexDirection: 'column', justifyContent: 'center' ,height:'100%',lineHeight:'50px'}}>
                <h2>{brand}</h2>
                <h6>{title}</h6>
                <div>{rate} {review}</div>
            </div>
            <div style={{border:'1px solid grey', borderRadius:'4px',height:'20px',padding:'20px', display:'flex',alignItems:'center',justifyContent:'center',width:'100px',fontSize:'25px',fontWeight:'bold',justifyContent:'space-between'}}>
                <button onClick={()=>{setQty(qty-1)}} style={{fontSize:'40px'}}>-</button>
                <button>{qty}</button>
                <button onClick={()=>{setQty(qty+1)}} style={{fontSize:'30px'}}>+</button>
            </div>
            <h4 style={{fontSize:'30px'}}>${totalAmount}</h4>
        </div>
    )

}