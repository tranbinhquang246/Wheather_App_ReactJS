import './App.css';
import SelectSearch, { fuzzySearch } from "react-select-search";
import React,{ useEffect, useState } from 'react';
import dataCities from './assets/worldcities.json'
import axios from 'axios';
import Result from './component/Result';

function App() {
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [showResult, setShowResult] = useState(false)
  const handleClickSubmit = async () => {
    if(value === ""){
      alert("Please choose a city")
    }else{
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b501052d2d25ddb4824e2155640522be`)
      .then(function(response){
        setData(response.data)
      })
      .catch(function(error){
        console.log(error);
      })
      setShowResult(true)
    }
  }
  return (
    <div className="App flex flex-col items-center w-screen h-screen bg-gradient-to-r from-slate-600 to-amber-600">
      <div className="mt-5 flex flex-col items-center w-full h-1/2">
        <label className="text-slate-100 text-2xl mb-5">Weather Forecast</label>
        <div className="flex justify-center w-full">
          <SelectSearch
              options={dataCities}
              value={value}
              search = {true}
              filterOptions={fuzzySearch}
              emptyMessage="Not found"
              onChange={setValue}
              placeholder="Select your country"/>
            <button className="ml-5 rounded-lg bg-slate-100 p-2 text-sm font-bold" onClick={handleClickSubmit}>Submit</button>
          </div>
        </div>
        {showResult ? <Result data={data}/> : null}
      </div>
      
  );
}

export default App;
