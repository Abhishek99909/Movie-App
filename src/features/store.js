import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./movie/movieSlice"

export const store = configureStore({

    reducer: {

        movie: movieSlice

    }

})

