import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';
import ArtistList from "./component/ArtistList";
import CdList from "./component/CdList";


function App() {
  return (
      <BrowserRouter>
        
        <div className="App">
        <h2> Welcome to music </h2>
        <hr/>
        <h1>
          <Link to="/artist_list"> Artist </Link> &nbsp;|&nbsp;
          <Link to="/cd_list"> CD </Link> &nbsp;
        </h1>
        <hr/>
        <Routes>
          <Route path="/artist_list" element={<ArtistList />}/>
          <Route path="/cd_list" element={<CdList/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
