
import {useContext} from 'react'
import {Context} from '../Context'
import Bounce from 'react-reveal/Bounce'


const createNotes = () => {

    const {createNote,createForm,updateCreateFormField} = useContext(Context)


    return (
      <Bounce left>
           <div className="">
        <h2>Create Note</h2>
        <form onSubmit={createNote}>
          <input   
                  value={createForm.title} 
                  onChange={updateCreateFormField} 
                  placeholder="Enter Title"
                  type="text" 
                  name="title"
          />
          <input 
                  value={createForm.body} 
                  onChange={updateCreateFormField} 
                  placeholder="Enter desc"
                  name="body"
          />
          <button className="submit" type="submit">Submit</button> 
        </form>
      </div>
      </Bounce>
    )
}

export default createNotes