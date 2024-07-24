import { useState,useEffect } from 'react'
import styles from '../styles/note_create.module.scss'

const NoteForm = ({Note,handleSubmit}) => {

    const [note, setNote] = useState("")
    const [date, setDate] = useState("")

    useEffect(()=>{
       setNote(Note?.note)
       setDate(Note?.deadline)
    },[Note])



    return (
        <>
            <div className={styles.note_form_container}>
                <form className={styles.note_form} onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="note_content">Note</label>
                        <textarea
                            id="note_content"
                            name="note_content"
                            rows="4"
                            placeholder="Write your note here..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="note_timestamp">Timestamp</label>
                        <input
                            type="datetime-local"
                            id="note_timestamp"
                            name="note_timestamp"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.submit_button}
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </>
    )
}

export default NoteForm