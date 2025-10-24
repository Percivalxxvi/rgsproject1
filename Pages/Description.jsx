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
        <div className="lg:h-100 lg:w-[26%] lg: border-6 border-black bg-black">
          <img className="h-full w-full object-contain" src={state.strMealThumb} alt="" />
        </div>
        <div className="desc-txt">
          <h1 className="font-bold w-[95%]">Name: {state.strMeal}</h1>
          <h1 className="w-[95%]">{state.strCategory}</h1>
          <h1 className="w-[95%]">{state.strArea}</h1>
          <p>Instructions:{state.strInstructions}</p>
          <div className="desc-vid gap-3">
            <h1>Watch Recipe Tutorial Here:</h1>
            <a className='text-blue-500 hover:text-blue-800' href={state.strYoutube}>Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description