import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Movie} from './components/Movie'
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
const FEATURE="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    axios.get(FEATURE)
    .then(res=>{
     
      setMovies(res.data.results)
    })
    
    .catch(err=>console.log(err))
 

  },[])
  return (
    <React.Fragment>
    <Header/>
    <div className="row">
      {movies.length>0 && movies.map(movie=><Movie key={movie.id} data={movie}/>)}

  
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
