import { useCart } from "../context/Cart"
import * as math from 'mathjs'
export const ShowCart=()=>{
    const {cart, dispatchCart, cartDisplay,setGotocart}=useCart();
    const onDelClick=(productName)=>{
        dispatchCart({type: 'delete', payload: productName})
        setGotocart(false);
    }
    const calculate=(expression)=>{
        return math.evaluate(expression)
    }
    // console.log(cartDisplay, cart.cart)
    return(
        <>
        {cartDisplay?
        <div className="absolute z-40 w-11/12 top-32 right-4 md:top-24 md:right-24 md:w-80 h-52 p-2 bg-White shadow-lg shadow-GrayishBlue">
        {cart.cart?.length>0?cart.cart.map((product)=>
        <div>
            <p className="border-LightGrayishBlue border-b-2 p-2 font-bold">Cart</p>
            <div className="flex mx-4">
                <img className="h-12 inline-block mt-4 rounded-md" src={product.productImages[0]}/>
                <div className="mx-4 my-4">
                    <span className="text-xs text-darkGrayishBlue">{product.productName}</span>
                    <p className="mt-1 text-darkGrayishBlue text-xs">{product.discountPrice} x {product.quantity} <span className="ml-2 font-extrabold text-Black">${calculate(`${product.discountPrice.split('$')[1]} * ${product.quantity}`).toString()}</span></p>
                </div>
                <button onClick={()=>onDelClick(product.productName)}>
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="#C3CAD9" fill-rule="nonzero"/></svg>
                </button>
            </div>
            <button className="mx-2 my-4  py-2 px-8 w-11/12 rounded-lg bg-orange hover:bg-paleOrange">Checkout</button>
        </div>): <div className="font-bold">
        <p className="border-LightGrayishBlue border-b-2 p-2">Cart</p>
        <p className="p-12 text-center text-darkGrayishBlue text-sm">Your cart is empty</p></div>
        }
        </div>:''}
        </>
    )
}
