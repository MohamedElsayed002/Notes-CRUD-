
import {useContext} from 'react'
import {Context} from '../Context'


const createNotes = () => {

    const {createNote,createForm,updateCreateFormField} = useContext(Context)

    return (
        <div className="">
        <h2>Create Note</h2>
        <form onSubmit={createNote}>
          <input   
                  value={createForm.title} 
                  onChange={updateCreateFormField} 
                  type="text" 
                  name="title"
          />
          <textarea 
                  value={createForm.body} 
                  onChange={updateCreateFormField} 
                  name="body"
          />
          <button type="submit">Submit</button> 
        </form>
      </div>
    )
}

export default createNotes