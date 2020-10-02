import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
export const Header=()=>{
    return (

        <nav>
        <div className="nav-wrapper grey darken-4">
            <a href="#!" class="brand-logo"><i className="material-icons">cloud</i>Logo</a>
            <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
            </ul>
        </div>
        </nav>
    );


}