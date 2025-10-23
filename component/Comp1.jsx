import React from 'react'
import './Comp1.css'
import { useNavigate } from "react-router-dom";

const Comp1 = ({data1})=>{
  const navigate = useNavigate();
  return (
    <div className=" comp1 flex flex-col gap-2 border-2 border-black w-[49%] lg:w-80 h-fit">
      <img src={data1.strMealThumb} alt="" />
      <p className="text-2xl">{data1.strCategory} </p>
      <h2>
        {data1.strMeal.length > 20
          ? data1.strMeal.slice(0, 20) + "..."
          : data1.strMeal}
      </h2>
      <button
        onClick={() => {
          navigate("/Description", { state: data1 });
        }}
      >
        See more
      </button>
    </div>
  );
}

export default Comp1