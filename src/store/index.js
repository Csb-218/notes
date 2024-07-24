import {configureStore} from '@reduxjs/toolkit'
import NoteSlice from './NoteSlice'


const store = configureStore({

    reducer:{
        notes : NoteSlice.reducer
    }
    
})

export default store