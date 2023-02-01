import { useState } from "react"

export const Images = ()=>{

const [images, setImages] = useState('');

const onImageChange=(e)=>{
    const image =(e.target.files[0]);
  const img1 =  URL.createObjectURL(image)
    console.log(images)
    setImages(img1)
}

    return(
        <div>
            <input type="file" onChange={onImageChange}/>
            <img src={images} alt='upload'/>
        </div>
    )
}