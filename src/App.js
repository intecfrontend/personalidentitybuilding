import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resultspage from "./pages/Resultspage";
import DetailsPage from "./pages/DetailsPage";
import Welkom from "./pages/Welkom";
import Consument from "./pages/Consument";
import Consumentmag from "./pages/MagazinesConsu";
import Ondernemermag from "./pages/MagazinesOndernem";
import Bedankt from "./pages/BedanktAccount";
import "@identitybuilding/idb-react-ui-elements/dist/styles/Colors.css";
import './App.css';
import './AppColors.css';

// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/search/" element={<Resultspage />} />
          <Route exact path="/search/:query" element={<Resultspage />} />
          <Route exact path="/magazines/:id" element={<DetailsPage/>} />
          {/* <Route path="search/:query" element={welkom<Search />} />           */}
          {/* <Route exact path="/welkom" element={<Welkom/>} />
          <Route exact path="/consument" element={<Consument/>} />
          <Route exact path="/bedankt" element={<Bedankt/>} />
          <Route exact path="/consumentmag" element={<Consumentmag/>} />
          <Route exact path="/ondernemermag" element={<Ondernemermag/>} /> */}
          {/* <Route path="magazines/:query" element={<Magazines/>} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);