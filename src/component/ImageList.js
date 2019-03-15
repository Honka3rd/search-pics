import React from 'react';
import '../component/Images.css';
import ImageCard from '../component/ImageCard';

const ImageList =(props)=>
{
    const images = props.imgs.map(
        (image)=>{
            return<ImageCard key={image.id} image={image}/>
        }
    )
    return(
        <div className="image-list">{images}</div>
    );
}

export default ImageList;