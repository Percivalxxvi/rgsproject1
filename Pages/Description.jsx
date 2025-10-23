import React from 'react'
import { useLocation } from 'react-router-dom'
import "../Pages/Description.css"
import { Link } from 'react-router-dom'


const Description = () => {
    const {state}=useLocation()
    console.log(state)
  return (
    <div>
      <div className="back">
        <Link to={"/"}> Back</Link>
      </div>
      <div className="desc">
        <div className="desc-img">
          <img src={state.strMealThumb} alt="" />
        </div>
        <div className="desc-txt">
          <h1 className="font-bold w-[95%]">Name: {state.strMeal}</h1>
          <h1 className="w-[95%]">{state.strCategory}</h1>
          <h1 className="w-[95%]">{state.strArea}</h1>
          <p>Instructions:{state.strInstructions}</p>
          <div className="desc-vid">
            <h1>Watch Tutorial Here:</h1>
            <a href={state.strYoutube}>Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description