import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
export default function Header() {
    const [searchquery, setsearchquery] = useState("")
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Movies</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link" aria-current="page" to="/popular">Popular</Link>
                            <Link class="nav-link" aria-current="page" to="/top-rated">Top Rated</Link>
                         </div>
                      </div>
                      <form class="d-flex my-3">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setsearchquery(e.target.value)}/>
                        <Link to={`/search/${searchquery}`}>
                         <button class="btn btn-outline-info" type="submit">Search</button>
                         </Link>
                     </form>
                </div>
            </nav>
        </>
    )
}
