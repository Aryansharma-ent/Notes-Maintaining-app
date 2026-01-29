import {Routes,Route} from 'react-router-dom'
import NotesPage from '../src/pages/NotesPage'
import AddNote from '../src/pages/AddNote'
import EditNote from '../src/pages/EditPage'
import NotFound from '../src/pages/NotFound'
import Main from './layouts/Main'
function App() {


  return (
    <Routes>
      <Route element = {<Main/>}>
      <Route path = "/" element = {<NotesPage/>} />
      <Route path = "/add-note" element = {<AddNote/>} />
      <Route path = "/edit-note/:id" element = {<EditNote/>} />
      <Route path = "*" element = {<NotFound/>} />
      </Route>
    </Routes>
    
  )
}

export default App
