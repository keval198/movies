import React from 'react'
import Moviecard from './Moviecard'
import {useState, useEffect} from 'react'

export default function Toprated() {
    const [movies, setmovies] = useState([])
    const [pageNum, setpageNum] = useState(1)
    const [moviesResult, setmoviesResult] = useState("")
    const [isLoding, setisLoding] = useState(true)
    const [movieCount, setmovieCount] = useState(0)
    const [totalPageNum, settotalPageNum] = useState(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd&language=en-US&page=${pageNum}`)
        .then((res) => res.json())
        .then((result)=>{
            setmovies(result.results)
            settotalPageNum(result.total_pages)
            setisLoding(false)
            })
        }, [pageNum])

    useEffect(() => {
        const moviesResultTemp = movies.map(
            (obj)=><Moviecard id={obj.id} title={obj.title} image={obj.poster_path} releasedate={obj.release_date}/>
        );
        setmovieCount(movies.length)
        setmoviesResult(moviesResultTemp)
        if(!isLoding && movies.length == 0){
            setmoviesResult(<div className='display-4 d-flex justify-content-md-center'>0 Results</div>)
        }
    }, [movies,isLoding])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [pageNum])

    return (
        <>
        <div className="row justify-content-md-center">
          {
               isLoding ?
               <div className="d-flex justify-content-center">
                   <div className="spinner-border m-4" role="status">
                           <span class="visually-hidden">Loading...</span>
                   </div>
               </div>:
                moviesResult
            }
        </div>
        <div class="d-grid gap-2">
        { movieCount==20 && pageNum < totalPageNum?
                <button type="button" className="btn btn-dark" style={{margin : '20px', height:'44px'}} onClick={()=> setpageNum(pageNum + 1)}>More</button>
                :""
        }</div>
        </>
    )
}