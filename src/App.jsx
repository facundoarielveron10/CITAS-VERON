import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // ESTADO - PACIENTES
  const [pacientes, setPacientes] = useState([]);

  const tomarValor = (valor) => {
    console.log(valor)
  };  

  return (
    // Contenedor
    <div className="container mx-auto mt-20">
      {/* Header */}
      <Header 
        
      />
      {/* Body */}
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App