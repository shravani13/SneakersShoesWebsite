import avatar from '../../../public/images/image-avatar.png'
import { useCart } from '../../context/Cart'
import { ShowCart } from '../ShowCart';
import { useMenu } from '../../context/Menu';

export const Navbar=()=>{
    const {cart}=useCart();
    const {cartDisplay, setCartDisplay}=useCart();
    const {menu, setMenu}=useMenu();
    const onShowCartClick=()=>{
        setCartDisplay(!cartDisplay);
    }
    const onMenuClick=()=>{
        setMenu(!menu);
        console.log(menu);
    }
    return(
        <div className="relative flex md:border-2 md:border-gray-50">
            <button className='ml-8 mt-1 md:ml-4 md:invisible' onClick={onMenuClick}>
                <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
            </button>
            <span className="mr-4 md:mr-0 p-8 text-4xl md:pl-12 font-kumbhSans font-bold md:text-3xl">sneakers</span>
            <ul className="hidden md:flex md:flex-grow md:text-gray-400 md:pt-10 md:visible">
                <li className="px-4 hover:border-b-4 hover:border-orange">Collections</li>
                <li className="px-4 hover:border-b-4 hover:border-orange">Men</li>
                <li className="px-4 hover:border-b-4 hover:border-orange">Women</li>
                <li className="px-4 hover:border-b-4 hover:border-orange">About</li>
                <li className="px-4 hover:border-b-4 hover:border-orange">Contact</li>
            </ul>
            
            <button className='relative' onClick={onShowCartClick}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000000" fill-rule="nonzero"/></svg>
            <span className='absolute top-8 text-White text-xs bg-orange rounded-full px-1'>{cart.cart.length>0?cart.cart.reduce((acc,{quantity})=>acc+quantity,0):''}</span>
            </button>
            <ShowCart />
            <img className="scale-50 md:mx-4 hover:ring-8 hover:ring-orange hover:rounded-full" src={avatar} />
        </div>
    )
}