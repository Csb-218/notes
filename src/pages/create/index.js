import { useRouter } from 'next/router';
import { useState } from 'react'
import styles from '../../styles/note_create.module.scss'
import { noteActions } from '@/store/NoteSlice';
import { useDispatch } from 'react-redux';



const CreateNote = () => {

    const Today = new Date();
    const [note, setNote] = useState("")
    const [date, setDate] = useState(Today)

    const dispatch  = useDispatch()
    const router = useRouter()

    function handleSubmit(e) {
         e.preventDefault();
        
         const payload = {
            note : note,
            deadline : date
         }
        
         dispatch(noteActions.addNote(payload))
         
         router.replace('/')

    }




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

export default CreateNote