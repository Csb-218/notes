import {createSlice} from '@reduxjs/toolkit'
import { formatDateToInput } from '@/utils/helpers';

const NoteSlice = createSlice({
      name :'notes',
      initialState:{
        initialNotes:[
        {   
            id:1,
            note:'Go to bookstore',
            deadline:new Date(),
            status:'Done'
        },
        {
            id:2,
            note:'Study graphs',
            deadline:new Date(),
            status:'Missed'
        },
        {
            id:3,
            note:'Study markets',
            deadline:new Date(),
            status:'on going'
        }
      ]},

    reducers:{

        addNote(state,action){

             const note = action.payload.note;
             const deadline = action.payload.deadline;

             state.initialNotes.push({
                id:state.initialNotes.length+1,
                note:note,
                deadline:new Date(deadline),
                status:'on going'
             })

        },

        deleteNote(state,action){

             const id = action.payload

             const filteredNotes = state.initialNotes.filter(note => note?.id !== id)
            //  console.log(id,filteredNotes.length)
             state.initialNotes = filteredNotes
             
        },

        updateNote(state,action){

            const id = action.payload.id;
            const note = action.payload.note;
            const deadline = action.payload.deadline;

            const filteredNote = state.initialNotes.find(note => note?.id === Number(id))
            // console.log(filteredNote.deadline,action?.payload,deadline)

            filteredNote.note = note
            filteredNote.deadline = new Date(deadline)  
        }
    }
})

export const noteActions = NoteSlice.actions
export default NoteSlice