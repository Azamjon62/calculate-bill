import './App.css'
import Main from './Main'
import LoginPage from "./Pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="*" element={<PageNorFound />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
