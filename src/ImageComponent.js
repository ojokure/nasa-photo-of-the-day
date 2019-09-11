import React from "react";

function Image(props){
    const {image}= props

return (
      <>
      <img className='image'  src={image.url}/>
      </>
)}

export default Image;