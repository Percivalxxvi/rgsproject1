import React,{useEffect, useState} from 'react'
import Comp1 from '../component/Comp1'
import "../src/App.css"
import Navpc from '../component/Navpc'



const Home = () => {
  const [data1,setValue]= useState([])
  const [search, setSearch]= useState("")

  const fetchdata= async()=>{
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search===""?"a":search}`);
    const data1= await response.json();
    setValue(data1.meals);
    console.log(data1);
}

// fetchdata();
useEffect(()=>{
  fetchdata()
},[search])

console.log(search)
  return (
    <div className="home">
      <h1 className="search-txt0">RECIPE WEB</h1>
      {/* <Navpc /> */}
      <p className="hometxt">Home</p>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Type first letter to get food..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchdata}>Load Product</button>
      </div>

      <div className="div1">
        {data1 === "no data found" ? (
          <h1>No Results Found</h1>
        ) : (
          data1.map((item, index) => {
            return <Comp1 key={index} data1={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default Home