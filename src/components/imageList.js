import React from "react"

export const ImageList = (props) => {
    console.log(props.item)
    return(
        <>
            <div className="image-grid">
                {props.item.map((item, i)=>(
                     <div key={i}>
                         <img src={item.urls.small} alt="Unsplash Img"/>
                     </div>
                 ))}
            </div>
                 
        </>
    )
}