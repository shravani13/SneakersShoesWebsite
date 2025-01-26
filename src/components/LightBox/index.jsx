import { useLightDisplay } from "../../context/lightDisplay";


export const LightBox=({images,thumbnailImages})=>{
    const {lightDisplay, setLightDisplay, lightDisplayImage, setLightDisplayImage} =useLightDisplay();
    const onThumbnailClick=(e)=>{
        let value=images[e.target.alt]
        setLightDisplayImage(value);
        // setLightDisplayImage(`/images/${e.target.alt}.jpg`);
    }
    const onCloseClick=()=>{
        setLightDisplay(false)
    }
    const onPrevClick=()=>{
        setLightDisplayImage((prev)=>{
            let value=Number(prev.split('-')[2].split('.')[0]);
            if(value===1){
                value=4;
            }
            else{
                value=value-1;
            }
            value=value-1;
            // let item=`/images/image-product-${value}.jpg`;
            setLightDisplayImage(images[value]);
        });
    }
    const onNextClick=()=>{
        setLightDisplayImage((prev)=>{
            let value=Number(prev.split('-')[2].split('.')[0]);
            if(value===4){
                value=1;
            }
            else{
                value=value+1;
            }
            // let item=`/images/image-product-${value}.jpg`;
            value=value-1;
            setLightDisplayImage(images[value]);
        });
    }
    return(
        <>
        {lightDisplay?<div className="absolute z-50 top-0 left-0 bg-BlackOp w-full h-full invisible md:visible">
        
        <div className="inset-y-36 inset-x-1/3 w-1/4 absolute">
        <button onClick={onCloseClick}>
        <svg className="absolute right-0 top-[-5%] top fill-White hover:fill-orange" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
        </button>
        <button onClick={onPrevClick} className="rounded-full absolute p-4 top-36 left-[-5%] bg-white stroke-black hover:stroke-orange">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button onClick={onNextClick} className="rounded-full bg-white p-4 absolute top-36 right-[-5%] right-0 stroke-black hover:stroke-orange">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <img src={lightDisplayImage} className="rounded-2xl mb-10 "/>
        <div onClick={onThumbnailClick} className="grid grid-cols-4 gap-4">
        {thumbnailImages.map((image,index)=><img key={index} className={lightDisplayImage==images[index]?"opacity-50 border-4 border-orange hover:opacity-50 rounded-2xl":"hover:opacity-50 rounded-2xl"} src={image} alt={index}/>)}
    </div>
        </div>
        </div>
        : ''}
    </>
    )
}
