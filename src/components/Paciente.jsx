import React from 'react'

export const Paciente = () => {
  return (
    // Paciente
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
        {/* Nombre Mascota */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Guasonete</span>
        </p>
        {/* Propietario */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Facundo Veron</span>
        </p>
        {/* Email */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">facundoarielveron10@gmail.com</span>
        </p>
        {/* Alta */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
            <span className="font-normal normal-case">10 de Diciembre del 2022</span>
        </p>
        {/* Sintomas */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptatum a assumenda dignissimos amet repellendus at adipisci, sed aut incidunt iusto corrupti commodi quis accusantium, dolorum eligendi et debitis maiores.</span>
        </p>
    </div>
  )
}