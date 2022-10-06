import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // Aplicamos el estado
  // ESTADO - INPUTS
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  // ESTADO - ALERTAS
  const [error, setError] = useState(false);

  // EFECTO
  useEffect(() => {
    if ( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas); 
    }
  }, [paciente]);

  // Genera un id unico
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  
  // Envio de Formulario
  const handleSubmit = (e) => {
    // Reseteamos la funcionalidad
    e.preventDefault();
    
    // Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true);
      return;
    }

    // No hubo ningun error
    setError(false);
    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    // Editar un paciente
    if (paciente.id) {
      // Editando el Registro
      // Asignamos el id del paciente
      objetoPaciente.id = paciente.id;
      // Agregamos la informacion actualizada del paciente
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      // Toma una copia del arreglo de pacientes y la reescribe con lo que hay en paciente
      objetoPaciente.id = generarId(); // Generamos un id unico para el paciente
      setPacientes([...pacientes, objetoPaciente]); 
    }

    // Reiniciar el formulario
    setNombre(''), setPropietario(''), setEmail(''), setFecha(''), setSintomas('');
  }

  return (
    // Contenedor Formulario
    <div className="md:w-1/2 lg:w-2/5">
        {/* Titulos */}
        <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5 md:mx-0">
            { error && (
              <Error><p>Todos los campos son obligatorios</p></Error>
            )}
            {/* Mascota */}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
              <input
                id="mascota"
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 rounded-md hover:border-indigo-900 transition-all"
                value={nombre}
                onChange = { (e) => setNombre(e.target.value)}
              />
            </div>
            {/* Propietario */}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
              <input
                id="propietario"
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 rounded-md hover:border-indigo-900 transition-all"
                value={propietario}
                onChange = { (e) => setPropietario(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email de contacto"
                className="border-2 w-full p-2 mt-2 rounded-md hover:border-indigo-900 transition-all"
                value={email}
                onChange = { (e) => setEmail(e.target.value)}
              />
            </div>
            {/* Fecha de Alta */}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
              <input
                id="alta"
                type="date"
                className="border-2 w-full p-2 mt-2 rounded-md hover:border-indigo-900 transition-all"
                value={fecha}
                onChange = { (e) => setFecha(e.target.value)}
              />
            </div>
            {/* Sintomas */}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
              <textarea 
                className="border-2 w-full p-2 mt-2 rounded-md hover:border-indigo-900 transition-all" 
                id="sintomas"
                placeholder="Describe los Sintomas"
                value={sintomas}
                onChange = { (e) => setSintomas(e.target.value)}
              />
            </div>
            {/* Boton Enviar */}
            <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
            />
        </form>
    </div>
  
  )
  
}

export default Formulario