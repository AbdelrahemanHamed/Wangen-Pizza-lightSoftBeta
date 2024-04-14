import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/index";
import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/checkout/Checkout";
import Contact from "./Pages/Kontact/Contact";
import Angebote from "./Pages/Angebote/Angebote";
// import Ang from "./Pages/Angebote/Ang";
import Menu from "./Pages/menu/Menu";
import Menu1 from "./Pages/menu/Menu-v1";
import NewMenu from "./Pages/NewMenu/NewMenu";

import { AngDetails } from "./Pages/Angebote-details/AngDetails";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservation" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/menu/" element={<Navigate to="/menu/1?sub-cat=1" />} />
          <Route path="/menu/:id" element={<Menu />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route path="/new" element={<Navigate to="/new/1?sub-cat=1" />} />
          <Route path="/new/:id" element={<Menu1/>} />
          <Route path="/angDetails" element={<AngDetails/>}/>
          
    
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
