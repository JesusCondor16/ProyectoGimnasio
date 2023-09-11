import {BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from "./components/Principal";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";

function App() {
  return (
    <div>
    <Encabezado />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/Principal" element={<Principal/>}/>
            <Route path="/Login" element={<Login />} />  
            <Route path="/Registro" element={<Registro />} />      
        </Routes>
    </BrowserRouter>
    <Pie/>
    </div>
);
}

export default App;
