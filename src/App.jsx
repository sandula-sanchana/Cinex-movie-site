import {Routes,Route} from 'react-router-dom'
import './App.css'
import {Homepage} from "./pages/Homepage/Homepage.jsx";
import {Popular} from "./pages/PopularPage/Popular.jsx";

function App() {


  return (
    <>
        <Routes>
            <Route index element={<Homepage/>} />
            <Route path="/popular" element={<Popular/>} />
        </Routes>
    </>
  )
}

export default App
