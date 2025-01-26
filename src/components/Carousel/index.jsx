import { useState} from "react"
import { useLightDisplay } from "../../context/lightDisplay";
import { LightBox } from "../LightBox";

export const Carousel=({images,thumbnailImages})=>{
    const [productImage,setProductImage]=useState(images[0]);
    const {setLightDisplay, setLightDisplayImage} =useLightDisplay();
    const onThumbnailClick=(e)=>{
        let value=images[e.target.alt]
        // setProductImage(`/images/${e.target.alt}.jpg`);
        setProductImage(value);
    }
    const onlightboxClick=()=>{
        setLightDisplay(true);
        setLightDisplayImage(productImage);
    }
    const onPrevClick=()=>{
        setProductImage((prev)=>{
            let value=Number(prev.split('-')[2].split('.')[0]);
            if(value===1){
                value=4;
            }
            else{
                value=value-1;
            }
            value=value-1;
            // let item=`/images/image-product-${value}.jpg`;
            return images[value];
        });
    }
    const onNextClick=()=>{
        setProductImage((prev)=>{
            let value=Number(prev.split('-')[2].split('.')[0]);
            if(value===4){
                value=1;
            }
            else{
                value=value+1;
            }
            // let item=`/images/image-product-${value}.jpg`;
            value=value-1;
            return images[value];
        });
    }
    return(
    <>
    
    <div>
    <button onClick={onPrevClick} className="md:invisible rounded-full absolute p-4 top-72 left-6 md:top-36 md:left-[-5%] bg-white stroke-black hover:stroke-orange">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
    </button>
    <button onClick={onNextClick} className="md:invisible rounded-full bg-white p-4 absolute top-72 right-6 md:top-36 md:right-[-5%] right-0 stroke-black hover:stroke-orange">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
    </button>
    <img  src={productImage} className="md:rounded-2xl mb-10" onClick={onlightboxClick}/>
    
    <div onClick={onThumbnailClick} className="hidden md:grid md:grid-cols-4 md:gap-4 md:visible ">
        {thumbnailImages.map((image,index)=><img key={index} className={productImage==images[index]?"opacity-50 border-4 border-orange hover:opacity-50 rounded-2xl":"hover:opacity-50 rounded-2xl"} src={image} alt={index}/>)}
    </div>
    </div>
    <LightBox images={images} thumbnailImages={thumbnailImages}/>
    </>
    )
}