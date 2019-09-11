import React from "react";

function ImageTitle(props){
    const {title, copyright}= props

    const fontWeight = {
        fontWeight :'bold'
    }

return (

      <div className='imagetitle'> <h style={fontWeight}>{title.title} 
      <p>Image Credit & Copyright: <a> {copyright.copyright}</a></p></h>
      </div>
)}

export default ImageTitle;