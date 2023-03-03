
import {useContext} from 'react'
import {Context} from '../Context'


const updateNotes = () => {

    const {updateNote,updateForm,handleUpdateFieldChange} = useContext(Context)

    return (
        <div>
        <h2>Update Note</h2>
        <form onSubmit={updateNote}> 
          <input  
                name="title" 
                value={updateForm.title}
                onChange={handleUpdateFieldChange}      
          />
          <textarea 
                name="body" 
                value={updateForm.body} 
                onChange={handleUpdateFieldChange}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    )
}

export default updateNotes