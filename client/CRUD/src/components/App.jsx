
import {useState,useEffect} from 'react'
import axios from 'axios'


const App = () => {

  // USE STATE
  const [data,setData] = useState([])

  const [createForm,setCreateForm] = useState({
    title: "",
    body : "",
  })

  const [updateForm,setUpdateForm] = useState({
    _id : null,
    title : "",
    body : ""
  })

  // FETCH DATA
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes")
    setData(res.data.note)
  }

  useEffect(() => {
    fetchNotes()
  },[])

  //  Submit Create Note
  const updateCreateFormField = (e) => {
    const {name,value}= e.target 
    setCreateForm({
      ...createForm,
      [name] : value
    })
  }

  // create new note
  const createNote = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:3000/notes" , createForm)
    setData([...data,res.data.note])
    setCreateForm({title : '' , body : ''})
  }
// DELETE NOTE
  const deleteNote = async (_id) => {
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`)
    const newArr = [...data].filter(note => note._id !== _id)
    setData(newArr)
  }

  // Toggle 

  const toggleUpdate = (note) => {
    setUpdateForm({title : note.title, body : note.body , _id : note._id})
  }

  // Update Note
  const handleUpdateFieldChange = async  (e) => {
    const {name,value} = e.target
    setUpdateForm({
        ...updateForm,
        [name] : value
    })
  }

  // Send Update note to api
  const updateNote = async (_id) => {
    const {title,body} = updateForm
    const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {title,body})
    const newNotes = [...data]
    const noteIndex = data.findIndex(note => {
      return note._id === updateForm._id
    })
    newNotes[noteIndex] = res.data.note
    setNotes(newNotes)
    setUpdateForm({title : '' , body : ''})
  }

  return (
    <div className="App">
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
      {
        updateForm._id && (
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
      {
        !updateForm._id && (
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
    </div>
  )
}

export default App