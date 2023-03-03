
import {useState,useEffect,createContext } from 'react'
import axios from 'axios'


const Context = createContext()

function ContextProvider ({children}) {
    const [data,setData] = useState([])

    const [createForm,setCreateForm] = useState({
      title: "",
      body : "",
    })

    const [updateForm,setUpdateForm] = useState({
      _id : null,
      title : "",
      body : "",
    })

    const fetchNotes = async () => {
        const res = await axios.get("http://localhost:3000/notes")
        setData(res.data.note)
      }
    
      useEffect(() => {
        fetchNotes()
      },[])

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
      const updateNote = async (e) => {
        e.preventDefault()
        const {title,body} = updateForm
        const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {title,body})
        const newNotes = [...data]
        const noteIndex = data.findIndex(note => {
          return note._id === updateForm._id
        })
        newNotes[noteIndex] = res.data.note
        setData(newNotes)
        setUpdateForm({title : '' , body : ''})
      }

      return (
        <Context.Provider value={{data,
                                 createForm,
                                 updateForm,
                                 updateCreateFormField,
                                 createNote,
                                 deleteNote,
                                 toggleUpdate,
                                 handleUpdateFieldChange,
                                 updateNote}}>
            {children}
        </Context.Provider>
      )
}

export {ContextProvider , Context}
