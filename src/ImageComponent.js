import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
  border-radius: 50%;
  margin-top: 10px;
`;

function Image(props) {
  const { image, loading } = props;


  return (
    <>
      <ImageStyled className="image" src={image.url}  loading={loading} />
    </>
  );
}

export default Image;
