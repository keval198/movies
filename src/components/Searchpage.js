import React from 'react'
import Moviecard from './Moviecard'
import { useState,useEffect } from 'react'

export default function Searchpage(props) {
    const {searchquery} = props.match.params
    console.log(searchquery)
    const [movies, setmovies] = useState([])
    const [pageNum, setpageNum] = useState(1)
    const [moviesResult, setmoviesResult] = useState("")
    const [movieCount, setmovieCount] = useState(0)
    const [totalPageNum, settotalPageNum] = useState(0)
    const [isLoding, setisLoding] = useState(true)
    const [moreButton, setmoreButton] = useState("")

   
    useEffect(() => {
    if(searchquery !== "" && searchquery !== null && typeof searchquery !== 'undefined'){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd&query=${searchquery}&page=${pageNum}&include_adult=false`)
        .then((res) => res.json())
        .then((result)=>{
        setmovies(result.results)
        settotalPageNum(result.total_pages)
        setisLoding(false)
        })
    }else{
        setmoviesResult(<div className='display-4 d-flex justify-content-md-center'>Enter Search Text</div>)
        setisLoding(false)
    }
    }, [searchquery,pageNum])
    
    useEffect(() => {
    if(searchquery !== "" && searchquery !== null && typeof searchquery !== 'undefined'){
        const moviesResultTemp = movies.map(
           (obj)=><Moviecard id={obj.id} title={obj.title} image={obj.poster_path} releasedate={obj.release_date}/>
       );
       setmovieCount(movies.length)
       setmoviesResult(moviesResultTemp)
       setmoreButton(<button type="button" className="btn btn-dark" style={{margin : '20px', height:'44px'}} onClick={()=> setpageNum(pageNum + 1)}>More</button>)
       if(!isLoding && movies.length === 0){
            setmoviesResult(<div className='display-4 d-flex justify-content-md-center'>0 Results</div>)
       }
    }else{
        setmoviesResult(<div className='display-4 d-flex justify-content-md-center'>Enter Search Text</div>)
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
                        </div>:moviesResult
            }
        </div>
        <div class="d-grid gap-2">
            { movieCount === 20 && pageNum < totalPageNum && typeof searchquery !== 'undefined' && isLoding === false ?
               moreButton :""
        }
            </div>
        </>
    )
}