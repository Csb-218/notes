import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useSelector,useDispatch} from 'react-redux'
import { noteActions } from '@/store/NoteSlice'
import styles from '../../styles/note_create.module.scss'
import { formatDateToInput } from '@/utils/helpers'

const NoteUpdate = () => {

    const [newnote, setNote] = useState("")
    const [newdate, setDate] = useState("")

    const router = useRouter()
    const page = router.pathname
    const {id} = router.query

    const dispatch =  useDispatch();

    const notes = useSelector(state => state.notes.initialNotes )

    const note = notes.find(note => note?.id === Number(id))


    function handleSubmit(e) {
        e.preventDefault();
       
        const payload = {
           id : id,
           note : newnote,
           deadline : (newdate)
        }
       
        console.log(11111111)
        dispatch(noteActions.updateNote(payload))
        router.replace('/')
   }

   useEffect(()=>{

     setNote(note?.note);
     setDate(formatDateToInput(note?.deadline));

   },[note])



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
                           value={newnote}
                           onChange={(e) => setNote(e.target.value)}
                       ></textarea>
                   </div>
                   <div className={styles.form_group}>
                       <label htmlFor="note_timestamp">Timestamp</label>
                       <input
                           type="datetime-local"
                           id="note_timestamp"
                           name="note_timestamp"
                           value={newdate}
                           maxlength="10"
                           onChange={(e) => setDate(e.target.value)}
                       />
                   </div>
                   <button
                       type="submit"
                       className={styles.submit_button}
                   >
                        {
                         !page.includes("update") ? "Add Note" : " Update"
                        }

                   </button>
               </form>
           </div>
       </>
   )
}

export default NoteUpdate