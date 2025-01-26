import { Carousel } from "../Carousel"
import { useCart } from "../../context/Cart"
import { products } from "../../db"

export const Product=()=>{
    const {cart, dispatchCart, setCartDisplay, gotocart, setGotocart}=useCart();
    // const [gotocart, setGotocart]=useState(false);
    const onAddClick=(productName, discountPrice, productImages)=>{
        dispatchCart({type: 'add', payload: {productName, discountPrice, productImages}})
        setGotocart(true);
    }
    const onAddToCart=(productName, discountPrice, productImages)=>{
        if(gotocart===false){
            dispatchCart({type: 'add', payload: {productName, discountPrice, productImages}})
            setGotocart(true);
        }
        else{
            setCartDisplay(true);
        }
    }
    const onRemoveClick=(productName)=>{
        dispatchCart({type: 'remove',payload: productName})
    }
    const cartCount=(prodName)=>{
        let value=cart.cart?.length>0?cart.cart.find(({productName})=>productName===prodName)?.quantity:0
        if(value===0){
            setGotocart(false);
        }
        return value;
    }
    return(
        <>
        
            {/* <img className="rounded-3xl" src={imageProudct1} /> */}
            
            {products.map((product)=>
                <div className="md:w-9/12 md:grid md:grid-cols-2 md:gap-20 md:mx-40 font-kubmhSans md:pt-16 pt-1">
                <Carousel images={product.productImages} thumbnailImages={product.productThumbnailImages} />
                <div className="mt-2 px-6 md:mt-14">
                <p className="text-darkGrayishBlue font-bold tracking-widest text-sm">SNEAKER COMPANY</p> 
                <h1 className="text-4xl font-bold mb-10 mt-4 tracking-wide text-Black">{product.productName}</h1>
                <p className="text-darkGrayishBlue mb-6">{product.description}</p>
                <span className="font-bold text-2xl">{product.discountPrice}</span>
                <span className="mx-4 bg-Black text-White p-1 text-xs rounded-md font-bold">{product.discount}</span>
                <p className="inline-block ml-28 md:ml-0 md:block line-through text-sm mt-2 mb-4">{product.originalPrice}</p>
                <div className="flex md:inline-block bg-gray-100 md:rounded-xl">
                <button className="p-4" onClick={()=>onRemoveClick(product.productName)}><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fill="#FF7E1B" fill-rule="nonzero"/></svg></button>
                <span className="flex-grow text-center p-4">{cartCount(product.productName)}</span>
                <button className="p-4" onClick={()=>onAddClick(product.productName, product.discountPrice, product.productImages)}><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fill="#FF7E1B" fill-rule="nonzero"/></svg></button>
                </div>
                <button className="w-full md:w-7/12 mt-4 py-4 px-10 md:ml-4 rounded-lg bg-orange hover:bg-paleOrange" onClick={()=>onAddToCart(product.productName, product.discountPrice, product.productThumbnailImages)}>
                <svg className="inline-block" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000000" fill-rule="nonzero"/></svg>
                <span className="px-4 font-bold">{gotocart? 'Go to cart' : 'Add to cart'}</span>
                </button>
                </div>
            </div>)}
        </>
    )
}