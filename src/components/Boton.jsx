function Boton({tipo}) {
    let clase;
    if (tipo === "Editar") {
        clase = "py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg";
    } 
    if (tipo === "Eliminar") {
        clase = "py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
    }

    return (
        <button className={clase} type="button">{tipo}</button>
    )
}

export default Boton