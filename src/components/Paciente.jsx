import React from 'react'
import Boton from "./Boton"

export const Paciente = ({paciente}) => {
    // Extraemos los valores
    const { nombre, propietario, email, fecha, sintomas } = paciente;

    return (
        // Paciente
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
            {/* Nombre Mascota */}
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            {/* Propietario */}
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            {/* Email */}
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            {/* Alta */}
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            {/* Sintomas */}
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            {/* Botones */}
            <div className='flex justify-between mt-10'>
                <Boton
                    tipo="Editar"
                />
                <Boton
                    tipo="Eliminar"
                />
            </div>
        </div>
    )
}