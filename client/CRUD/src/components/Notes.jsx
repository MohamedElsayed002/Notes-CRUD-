
import {useContext} from 'react'
import {Context} from '../Context'
import Flip from 'react-reveal/Flip'


const Notes = () => {

  const {data,deleteNote,toggleUpdate} = useContext(Context)

  return (
    <div className="listOfNotes">
      {
        data && data.map(note => {
          return (
            <Flip left cascade>
               <div className="friendContainer" key={note._id}>
                  <h1>{note.title}</h1> <br/>
                  <h1> {note.body}</h1>
                  <button className="btn-delete" onClick={() => deleteNote(note._id)}>DELETE</button>
                  <button className="btn-update" onClick={() => toggleUpdate(note)}>Update</button>
              </div>
            </Flip>
          )
       })
     }
     {
      data.length === 0 && 'No notes found'
     }
  </div>
  )
}

export default Notes