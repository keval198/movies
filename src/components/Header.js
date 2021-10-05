import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
export default function Header(props) {
    const [searchquery, setsearchquery] = useState("")
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Movies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/popular">Popular</Link>
                            <Link className="nav-link" aria-current="page" to="/top-rated">Top Rated</Link>
                         </div>
                      </div>
                      <form className="d-flex my-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setsearchquery(e.target.value)}/>
                        <Link to={`/search/${searchquery}`}>
                         <button className="btn btn-outline-info" type="submit">Search</button>
                         </Link>
                     </form>
                </div>
            </nav>
        </>
    )
}
