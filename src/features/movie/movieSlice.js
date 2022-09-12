import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import { APIKey } from '../../common/apis/MovieApikey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // const movieText = 'Harry'
    const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)

    const res = responce.data
    return res


});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShow', async () => {

    const seriesText = 'Friends'
    const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)

    const res = responce.data
    return res

})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (imdbID) => {

    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${imdbID}&Plot=full`)

    const res = response.data
    console.log(res)
    return res

})

const initialState = {

    movies: {},
    shows: {},
    selectedMovieOrShow: {}


}

const moviieSlice = createSlice({

    name: 'movie',
    initialState,
    reducers: {

        removeSelectedMovieOrShow: (state, action) => {

            state.selectedMovieOrShow = {}

        }

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchAsyncMovies.pending, (state, action) => {

                console.log('data is pending')

            })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {

                state.movies = action.payload
                console.log('data is fullfilled')

            })
            .addCase(fetchAsyncMovies.rejected, (state, action) => {

                console.log('data is rejected')

            })
            .addCase(fetchAsyncShows.pending, (state, action) => {

                console.log('data is pending')

            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {

                state.shows = action.payload
                console.log('data is fullfiled')

            })
            .addCase(fetchAsyncShows.rejected, (state, action) => {

                console.log('data is rejected')

            })
            .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {

                state.selectedMovieOrShow = action.payload

            })




    }

})
export const { removeSelectedMovieOrShow } = moviieSlice.actions

export default moviieSlice.reducer