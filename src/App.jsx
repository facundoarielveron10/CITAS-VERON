import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // ESTADO - PACIENTES
  const [pacientes, setPacientes] = useState(undefined);
  const [paciente, setPaciente] = useState({});

  // EFECTO - PACIENTES
  useEffect(() => {
    console.log(pacientes);
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    if(pacientes!==undefined){
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    }
  }, [pacientes]);
  
  
  // Elimina un paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    // Contenedor
    <div className="container mx-auto mt-20">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App