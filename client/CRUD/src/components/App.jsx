
import {useContext} from 'react'
import {Context} from '../Context'
import Notes from './Notes'
import UpdateNotes from './updateNotes'
import CreateNotes from './createNotes'


const App = () => {
  
const {updateForm} = useContext(Context)

  return (
    <div className="App">
      {
        !updateForm._id && <CreateNotes/>
      }
          {
        updateForm._id && <UpdateNotes/>
      }
            <Notes/>

    </div>
  )
}

export default App