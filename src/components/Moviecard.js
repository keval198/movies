import React from 'react'
import {Link} from 'react-router-dom'
export default function Moviecard({id,title,image,releasedate}) {
    const styles = {
        margin: '10px',
        width: '14rem',
    }
    return (
        <div className="col-sm-auto d-flex justify-content-center" style={{margin:'10px'}}>
        <Link to={`/detail/${id}`}>
        <div className="card bg-dark text-white h-100" style={styles}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image}`} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{releasedate}</p>
             </div>
        </div>
        </Link>
        </div>
    )
}