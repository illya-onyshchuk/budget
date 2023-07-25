import { GlobalStyle, Wrapper } from "./style";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Statistics from "../pages/Statistics";

const App = () => {
    return (
      <BrowserRouter>
        <Wrapper> 
          <GlobalStyle/> 
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul> 
          </nav>

          <Routes>
            <Route path='/home' element={<Home/>} exact={true}/>
            <Route path='/statistics' element={<Statistics/>} exact={true}/>
            <Route path='/about' element={<About/>} exact={true} />
            <Route path="*" element={<Navigate to={'/home'}/>} />
          </Routes>
        </Wrapper>
      </BrowserRouter>

    )
 }

 export default App