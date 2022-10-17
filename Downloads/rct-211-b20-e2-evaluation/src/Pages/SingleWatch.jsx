import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


const SingleWatch = () => {
 
  const [singleWatch,setSingleWatch]=useState({})
  const {id}=useParams()

let {image,name,category}=singleWatch
useEffect(()=>{
axios.get(`http://localhost:8080/watches/${id}`).then(res=>{
setSingleWatch(res.data)
})
},[])

console.log(singleWatch)



  
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img  style={{width:"200px"}}src={image} alt="Cover Pic" />
      </div>
      <div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
