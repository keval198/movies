import React from 'react'

export default function Peoplecard({image, title, castName}) {
    const styles = {
        margin: '10px',
        width: '14rem',
    }
    return (
        <div className="col-sm-auto d-flex justify-content-center" style={{margin:'10px'}}>
        <div className="card bg-dark text-white h-80" style={styles}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image}`} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{castName}</p>
             </div>
        </div>
        </div>
    )
}
