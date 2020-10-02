import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './styles/movie.css'
const IMG_URL="https://image.tmdb.org/t/p/w1280"

export const Movie=(props)=>{
    return (
        
       
    
        <div class="col s12  m4">
            <div class="card-small light-blue darken-4">
            <div class="card-image center-align">
             
                <img src={IMG_URL+props.data.poster_path} className="movie-img"/>
                <div className="movie-info card-title white-text ">
                <h5 className="title-movie">{props.data.title}</h5>
                <span className="green-text accent-3 grey darken-4 vote_average ">{props.data.vote_average}</span>
                </div>
         
            </div>
            <div class=" movie-overview white"> 
                <p >
                    {props.data.overview}
                </p>
            </div>
            
          
            </div>
        </div>
    
          
       
    
       
    );
}