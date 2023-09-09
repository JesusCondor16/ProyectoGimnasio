import {BrowserRouter, Route, Routes} from "react-router-dom";
import Principal from "./components/Principal";

function App() {
  return (
    // Utiliza BrowserRouter para habilitar el enrutamiento en la aplicación
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/Principal" element={<Principal/>}/>
            
        </Routes>
    </BrowserRouter>
);
}

export default App;
