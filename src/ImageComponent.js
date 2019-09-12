import React from "react";
import styled from 'styled-components';

const ImageStyled = styled.img`
  border-radius:50%;

`;


function Image(props){
    const {image}= props

return (
      <>
      <ImageStyled className='image'  src={image.url}/>
      </>
)}

export default Image;