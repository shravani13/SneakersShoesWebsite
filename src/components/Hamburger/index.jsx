import {useMenu} from '../../context/Menu'


export const Hamburger=()=>{
    const {menu,setMenu}=useMenu();
    const onClose=()=>{
        setMenu(!menu);
    }
    return(<>
     {menu?<div className='z-40 absolute top-0 left-0 h-full w-full bg-BlackOp font-kumbhSans'>
     <div className='bg-White w-7/12 h-full'>
     <button onClick={onClose}>
        <svg className="absolute left-8 top-8 fill-GrayishBlue hover:fill-orange" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
    </button>
    <ul className='p-8 pt-20 font-bold'>
        <li className='mb-2'>Collections</li>
        <li className='mb-2'>Men</li>
        <li className='mb-2'>Women</li>
        <li className='mb-2'>About</li>
        <li className='mb-2'>Contact</li>
    </ul>
    </div>
     </div>:''}
     
    </>)
}