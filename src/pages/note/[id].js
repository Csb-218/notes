import React from 'react'
import { useRouter } from 'next/router'
import NoteCard from '@/components/NoteCard'
import { useSelector } from 'react-redux'

const NoteDetails = () => {

    const router = useRouter()
    const {id} = router.query

    const notes = useSelector(state => state.notes.initialNotes )

    const note = notes.find(note => note?.id === Number(id))

    console.log(note,notes,id)

  return (
    <>
    <NoteCard note={note}/>
    </>
  )
}

export default NoteDetails