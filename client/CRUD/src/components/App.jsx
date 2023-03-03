
import {useContext} from 'react'
import {Context} from '../Context'
import Notes from './Notes'
import UpdateNotes from './updateNotes'
import CreateNotes from './createNotes'


const App = () => {
  
const {updateForm} = useContext(Context)

  return (
    <div className="App">
      <Notes/>

      {
        updateForm._id && <UpdateNotes/>
      }
      {
        !updateForm._id && <CreateNotes/>
      }
    </div>
  )
}

export default App