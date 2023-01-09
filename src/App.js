import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import About from "./Pages/AboutPage/About";
import Awards from "./Pages/AwardsPage/Awards";
import BooksPage from "./Pages/BooksPage";
import Home from "./Pages/HomePage/Home";
import Videos from "./Pages/VideosPage/Videos";



function App() {
  return (
    <>
      <HashRouter>
        <Routes>

          <Route path="/"
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            } />

          <Route path="/awards"
            element={
              <CommonContainer>
                <Awards />
              </CommonContainer>
            } />

          <Route path="/videos"
            element={
              <CommonContainer>
                <Videos />
              </CommonContainer>
            } />

          <Route path="/photos"
            element={
              <CommonContainer>
                {/* <Videos /> */}
              </CommonContainer>
            } />

          <Route path="/books"
            element={
              <CommonContainer>
           <BooksPage />
              </CommonContainer>
            } />

          <Route path="/about"
            element={
              <CommonContainer>
                <About />
              </CommonContainer>
            } />

          <Route path="/contact"
            element={
              <CommonContainer>
                {/* <Videos /> */}
              </CommonContainer>
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
