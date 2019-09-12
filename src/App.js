import React, { useState, useEffect } from "react";
import "./App.css";
import Date from "./DateComponent";
import Image from "./ImageComponent";
import ImageTitle from "./ImageTitleComponent";
import Description from "./DescriptionComponent";
import axios from 'axios';

function App() {

  const [dataState, setDataState] = useState({date: '',
                                              image: '',
                                              title: '',
                                              description: '',
                                              copyright: ''
                                            });

  useEffect(() => {

    axios.get('https://lambda-github-api-server.herokuapp.com/')
      .then(res => {

          setDataState(res.data)
      })
      .catch(error => {
             
      }

      )
  }, []);

  return (
    
    <div className="App">
      <p>
        <h1> Astronomy Picture of the Day 🚀 </h1>
      </p>
      <p> <a href='https://apod.nasa.gov/apod/archivepix.html'>Discoverthe cosmos!</a> Each day a different image or photograph of our fascinating universe is featured,
        along with a brief explanation written by a professional astronomer.
      </p>
      <Date date={dataState} />
      <Image image={dataState} src={dataState.hdurl}/>
      <ImageTitle title={dataState} copyright={dataState}/>
      <Description description={dataState} />
    </div>
  );
}

export default App;
