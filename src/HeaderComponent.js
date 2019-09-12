import React from 'react';
import styled from 'styled-components';



const SytledDiv = styled.div`
background: #6a1b9a;
color: #f953c6;
opacity:0.8;
text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
&:hover {
    color: #f4f4ff;
    font-weight: bold;
  }

   `;

function Header(props){

return (
<SytledDiv>
      <h1> Astronomy Picture of the Day 🚀 </h1>
      
      <p> <a href='https://apod.nasa.gov/apod/archivepix.html'>Discoverthe cosmos!</a> Each day a different image
      or photograph of our fascinating universe is featured,
      along with a brief explanation written by a professional astronomer.
      </p>
</SytledDiv>


)};

export default Header;