
import {useContext} from 'react'
import {Context} from '../Context'

const Notes = () => {

  const {data,deleteNote,toggleUpdate} = useContext(Context)

  return (
    <div>
      <h2>Notes :</h2>
      {
        data && data.map(note => {
          return (
            <div key={note._id}>
              <h1>{note.title}</h1>
              <p>{note.body}</p>
              <button onClick={() => deleteNote(note._id)}>DELETE</button>
              <button onClick={() => toggleUpdate(note)}>Update</button>
            </div>
          )
       })
     }
  </div>
  )
}

export default Notes