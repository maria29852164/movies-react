import React, { useState,useEffect,Ref, useRef, useLayoutEffect, useCallback, useMemo } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './header.css'
export const Header=(props)=>{
    const [search,setSearch]=useState('')
    const refInput=useRef('')
 
   const handlerSearch=()=>{
      props.handlerQuery(search)


   }
   const handlerInput=async()=>{
      setSearch(refInput.current.value)
   }

   
    return (

        <nav>
        <div className="nav-wrapper grey darken-4">
            <a href="#!" class="brand-logo"><i className="material-icons">cloud</i>Logo</a>
            <ul className="right hide-on-med-and-down search-movie">
          
            <li>
                <input className="validator" onChange={handlerInput} ref={refInput} type="text" id="search" className="white-text" placeholder="search Movie..."></input>
            </li>
            
            <li><a onClick={handlerSearch}><i className="material-icons">search</i></a></li>
           
       
         
            </ul>
        </div>
        </nav>
    );


}