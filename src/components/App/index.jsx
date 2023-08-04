import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { open } from "../../utils/indexdb";

import Home from "../pages/Home";
import About from "../pages/About";
import Statistics from "../pages/Statistics";
import Settings from "../pages/Settings";
import Navbar  from "../Navbar";

import { GlobalStyle, Wrapper } from "./style";

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
      }
    }

    componentDidMount() {
      open().then(() => {
        this.setState({
          loading: false
        })
      }).catch(() => {
        console.error('Error')
      });
    }

    render() {
      if (this.state.loading) {
        return <div>Loading...</div>
      }

      return (
            <BrowserRouter>
              <Wrapper> 
                <GlobalStyle/> 
                <Navbar/> 
                <Routes>
                  <Route path='/home' element={<Home/>} exact={true}/>
                  <Route path='/statistics' element={<Statistics/>} exact={true}/>
                  <Route path='/settings' element={<Settings />} exact={true}/>
                  <Route path='/about' element={<About/>} exact={true} />
                  <Route path="*" element={<Navigate to={'/home'}/>} />
                </Routes>
              </Wrapper>
            </BrowserRouter>
      )
    }
 }

 export default App