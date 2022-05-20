import React, { useState, useEffect } from 'react'
// import Thunderstorm from '../assets/thunderstorm.webp';
// import Drizzle from '../assets/Drizzle.png';
// import Rain from '../assets/rain.webp';
// import Snow from '../assets/snow.png';
import Clear from '../assets/clear.jpg';
// import Cloud from '../assets/cloud.png';
// import Normal from '../assets/normal.png';


function Result(props) {
    // const [bgImg, setBgImg] = useState("");
    // useEffect(() => {
    //     if(props.data.weather[0].main === "Thunderstorm"){
    //     setBgImg(Thunderstorm);
    // }else if(props.data.weather[0].main === "Drizzle"){
    //     setBgImg(Drizzle);
    // }else if(props.data.weather[0].main === "Rain"){
    //     setBgImg(Rain);
    // }else if(props.data.weather[0].main === "Snow"){
    //     setBgImg(Snow);
    // }else if(props.data.weather[0].main === "Clear"){
    //     setBgImg(Clear);
    // }else if(props.data.weather[0].main === "Clouds"){
    //     setBgImg(Cloud);
    // }else{
    //     setBgImg(Normal);
    // }
    // },[])
  return (
    <div className="w-1/2 h-1/2 bg-slate-200 mb-12 rounded-xl flex flex-col items-center bg-background">
        <strong className="text-xl mt-2">{props.data.name}|{props.data.sys.country}</strong>
        <label className="italic text-lg ">{props.data.weather[0].main}</label>
        <div className="w-full h-full flex">
            <div className=" h-full w-1/2 flex flex-col items-center justify-center">
            </div>
            <div className=" h-full w-1/2 flex flex-col items-center text-lg">
                <p>Temperature: {props.data.main.temp}</p>
                <p>Humidity: {props.data.main.humidity}</p>
                <p>Pressure: {props.data.main.pressure}</p>
                <p>Sea Level: {props.data.main.sea_level}</p>
                <p>Wind: {props.data.wind.speed}</p>
            </div>
        </div>
    </div>
  )
}

export default Result