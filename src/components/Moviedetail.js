import React from 'react'
import circle from './circle.css'
import Peoplecard from './Peoplecard'
import { useState, useEffect } from 'react'
export default function Moviedetail(props) {
    const [details, setdetails] = useState([])
    const [genres, setgenres] = useState([])
    const [displaygenres, setdisplaygenres] = useState("")
    const [cast, setcast] = useState([])
    const [displayCast, setdisplayCast] = useState("")
    const [isLoading, setisLoading] = useState(true)
    const {id} = props.match.params 


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd`)
        .then((res) => res.json())
        .then((result)=>{
            setdetails(result) 
            setgenres(result.genres)
            setisLoading(false)
        })
    }, [id])
    useEffect(() => {
        if(genres){
            let tempString = ""
            const temp = genres.map((item)=> item.name)
            setdisplaygenres(temp.toString())
        }
    },[genres])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd`)
        .then((res) => res.json())
        .then((result)=>{
            setcast(result.cast)
        })
    },[id])
    useEffect(() => {
        if(cast){
        const castResult = cast.map(
            (obj)=><Peoplecard title={obj.name} image={obj.profile_path} castName={obj.original_name}/>
        );
        setdisplayCast(castResult)
        }
    }, [cast])

    if(id != null && details.title != null){
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} alt="" />
                </div>
                <div className="col-auto col-sm-auto col-md-auto">
                    <div className="container">
                        <h1>{details.title? details.title : "N/A"}</h1>
                    </div>
                    <div className="container">
                                {details.release_date? details.release_date : ""} {displaygenres ? displaygenres : ""}
                    </div>
                    <div className="row container">
                        <div className="col-4 col-sm-4 col-md-4 col-lg-3">
                            <div className="circle"><p className="rating">{details.vote_average?details.vote_average:"N/A"}</p></div>
                        </div>
                        <div className="col-auto col-sm-auto col-md-auto my-3">User Score</div>
                    </div>
                    </div>
            </div>
            
        </div>
        <div className="container">
                        <div className="col"><h1 className="display-6">Overview</h1></div>
                        <div className="col-auto col-md-auto col-sm-auto">{details.overview}</div>
                    </div>
        <div className="container">
                <h4>Full Caste</h4>
        </div>
            <div className="row justify-content-md-center">
                {displayCast}
            </div>
        </>
    )
    }else{
        return (<>{
            isLoading?
        <div className="d-flex justify-content-center">
        <div className="spinner-border m-4" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>:<div className='display-4 d-flex justify-content-md-center'>Movie Not Found</div>
        }
        </>)
    }
}
