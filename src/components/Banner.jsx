import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'
function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    console.log(fetchUrl);
    const [MovieDetails,SetMovieDetails]=useState([])
    const fetchData= async()=>{
        const response  =  await instance.get(fetchUrl)
        const {data} = response; 
        SetMovieDetails(data.results[Math.floor(Math.random()*data.results.length)])
        console.log("=====response for banner==");
        console.log(response)
    }
    useEffect(()=>{
        fetchData();

    },[])
  return (
    <div>
       <div style={{height:"600px",
       backgroundPosition:"center",
       backgroundSize:"cover",
       backgroundImage:`url(${base_url}${MovieDetails.backdrop_path})`}}>
        <div className='banner_content'>
        <h2 style={{color:"white"}}>{MovieDetails?.name}</h2>
        <button className='btn btn-danger'>play <i class="fa-solid fa-play bg-transparent ms-3"></i></button>
        <button className='btn border-white ms-3  more'>more Info 
        <i class="fa-solid fa-caret-down bg-transparent"></i></button>
        <h5 style={{color:"white"}}>{MovieDetails?.overview?.slice(0,200)}...</h5>

        </div>
    
       </div>
    </div>
  )
}

export default Banner