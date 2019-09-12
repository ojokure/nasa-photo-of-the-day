import React, { useState, useEffect } from "react";
import "./App.css";
import DateComponent from "./DateComponent";
import Image from "./ImageComponent";
import ImageTitle from "./ImageTitleComponent";
import Description from "./DescriptionComponent";
import axios from 'axios';
import styled from 'styled-components';
import Header from "./HeaderComponent";



const AppStyle = styled.body`

margin: 0 auto;

`;

function App() {

  const today = new Date().toISOString().substr(0, 10);

  const [dataState, setDataState] = useState({});
  
  // slice of state for Date 
  const [dateState, setDateState] = useState(today);

  //  event handler for Date 
  const handleChange = (e) => {
    setDateState(e.target.value);
  }

  useEffect(() => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateState}`)
      .then(res => {

        setDataState(res.data)
      })

  }, [dateState]);
 

  return (dataState && (

    <body className="App">
      <Header/>
      <DateComponent today={dateState} handleChange={handleChange} />
      <Image image={dataState}  />
      <ImageTitle title={dataState} copyright={dataState} />
      <Description description={dataState} />
    </body>)
  );
}

export default App;
