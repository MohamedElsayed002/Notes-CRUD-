
import {useContext} from 'react'
import {Context} from '../Context'
import Bounce from 'react-reveal/Bounce'


const updateNotes = () => {

    const {updateNote,updateForm,handleUpdateFieldChange} = useContext(Context)
    console.log(updateForm)

    return (
      <Bounce right>
               <div>
        <h2>Update Note</h2>
        <form onSubmit={updateNote}> 
          <input  
                name="title" 
                value={updateForm.title}
                placeholder="update title"
                onChange={handleUpdateFieldChange}      
          />
          <input 
                name="body" 
                value={updateForm.body} 
                placeholder="update description"
                onChange={handleUpdateFieldChange}
          />
          <button className="submit" type="submit">Update</button>
        </form>
      </div>
      </Bounce>
    )
}

export default updateNotes