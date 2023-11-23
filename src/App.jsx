import NotesList from "./components/NotesList"
import { useSelector, useDispatch } from "react-redux"
import { getNotesFromAPI } from "./features/notes"
import Sidebar from "./components/Sidebar"
import SideNotes from "./components/SideNotes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DisplayedNote from "./components/DisplayedNote"
import Edit from "./components/Edit"
function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)
  console.log(notes)
  if (!notes.list) {
    dispatch(getNotesFromAPI())
  }

  return (
    <div className="bg-slate-800 min-h-screen flex">
      <BrowserRouter>
        <Sidebar />
        <SideNotes />
     
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<DisplayedNote />} />
          <Route path="/editer" element={<Edit />} />
          <Route path="/editer/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
