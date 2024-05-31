import './App.css'
import Main from './Main'
import LoginPage from "./Pages/LoginPage"
import PageNorFound from "./Pages/404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedStateProvider } from './Components/SharedStateContext';

function App() {

  return (
    <>
      <SharedStateProvider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<LoginPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<PageNorFound />} />
          </Routes>
        </BrowserRouter>
      </SharedStateProvider>
    </>
  )
}

export default App
