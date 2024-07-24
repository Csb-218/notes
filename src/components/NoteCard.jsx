import React from 'react'
import styles from '../styles/notecard.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { noteActions } from '@/store/NoteSlice'


const NoteCard = ({ note }) => {

  const router = useRouter()
  const page = router.pathname
  const dispatch = useDispatch()


  console.log(note?.deadline)
  return (
    <>

      <div className={styles.note_card}>

        <div className={styles.note_card_header}>
          <Link href={`/note/${note?.id}`}>
            <span className={styles.note_timestamp}>{note?.deadline?.toString()?.slice(0, 21)}</span>
          </Link>
          <span className={styles.note_star}>★</span>
        </div>

        <div className={styles.note_content}>
          {note?.note}
        </div>

        {
          page?.includes('note') &&
          <div>
            <button onClick={() => router.push(`/update/${note?.id}`)}>update</button>
            <button onClick={() => {
              dispatch(noteActions.deleteNote(note?.id))
              router.replace('/')
            }} >delete</button>
          </div>
        }

      </div>

    </>
  )
}

export default NoteCard