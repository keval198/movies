import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const getMovies = async (pageNum) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd&page=${pageNum}`)
    const result = await res.json()
    return result
}

const getTopRatedMovies = async (pageNum) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd&page=${pageNum}`)
    const result = await res.json()
    return result
}

const getSearchedMovies = async (searchQuery,pageNum) =>{
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd&query=${searchQuery}&page=${pageNum}&include_adult=false`)
    const result = await res.json()
    return result
}

const getMovie = async (id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f07a7cc8af7e84cb0d294a99bf2eacd`)
    const result = await res.json()
    return result
}


function* fetchMovies(action) {
   try {
       const movies = yield call(getMovies,action.pageNum)
       yield put({type: "MOVIES_FETCH_SUCCEEDED", payload: movies});
   } catch (e) {
      yield put({type: "MOVIES_FETCH_FAILED", message: e.message});
   }
}


function* fetchTopratedMovies(action) {
    try {
        const movies = yield call(getTopRatedMovies,action.pageNum)
        yield put({type: "MOVIES_TOPRATED_FETCH_SUCCEEDED", payload: movies});
    } catch (e) {
       yield put({type: "MOVIES_FETCH_FAILED", message: e.message});
    }
 }

function* fetchSearchedMovies(action) {
    try {
        const movies = yield call(getSearchedMovies,action.searchQuery,action.pageNum)
        yield put({type: "MOVIES_SEARCH_FETCH_SUCCEEDED", payload: movies});
    } catch (e) {
       yield put({type: "MOVIES_FETCH_FAILED", message: e.message});
    }
 }

function* fetchMovie(action) {
    try {
        const movies = yield call(getMovie,action.id)
        yield put({type: "MOVIES_DETAILS_FETCH_SUCCEEDED", payload: movies});
    } catch (e) {
       yield put({type: "MOVIES_FETCH_FAILED", message: e.message});
    }
 }


function* getMovieSaga() {
  yield takeEvery("UPDATE_MOVIES", fetchMovies);
  yield takeEvery("UPDATE_TOPRATED_MOVIES", fetchTopratedMovies)
  yield takeEvery("SEARCH_MOVIES", fetchSearchedMovies)
  yield takeEvery("GET_MOVIE", fetchMovie)
}

export default getMovieSaga;