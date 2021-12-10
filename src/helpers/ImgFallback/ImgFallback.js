import React from 'react'

export const ImgFallback = ({
        src, 
        alt, 
        fallbackSrc, 
        mediaType ,
        ...delegated
    }) => {

    return (
        <picture>

            <source 
            srcSet={src} 
            type={mediaType}
            />

            <img 
            src={fallbackSrc} 
            alt={alt} 
            {...delegated}
            />
            
        </picture>
    )
}
