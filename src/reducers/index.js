import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    popularMovies: null,
    topRatedMovies: null,
    searchMovies: null,
    movieDetail: null
}

export default createReducer(initialState,(builder) => {
    builder.addCase("MOVIES_FETCH_SUCCEEDED", (state, action)=>{
        state.popularMovies = action.payload
    }).addCase("MOVIES_TOPRATED_FETCH_SUCCEEDED", (state, action)=>{
        state.topRatedMovies = action.payload
    }).addCase("MOVIES_SEARCH_FETCH_SUCCEEDED", (state, action)=>{
        state.searchMovies = action.payload
    }).addCase("MOVIES_DETAILS_FETCH_SUCCEEDED", (state, action)=>{
        state.movieDetail = action.payload
    }).addCase("CLEAR_MOVIE", (state)=>{
        state.movieDetail = null
    })
})