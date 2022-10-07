import { Paciente } from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    // Contenedor del Listado
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
        {/* Pacientes */}
        {pacientes && pacientes.length ? (
          // Hay pacientes
          <>
            {/* Titulo */}
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administras tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            
            {/* Paciente */}
            { pacientes.map( (paciente) => (
                // Iteramos sobre pacientes
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
            ))}
          </>
        ) : (
          // No Hay pacientes
          <>
            {/* Titulo */}
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes{''}
              <span className="text-indigo-600 font-bold">y apareceran aqui</span>
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes