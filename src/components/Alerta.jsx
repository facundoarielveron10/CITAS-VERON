function Alerta({ tipo, mensaje }) {
  // Revisamos el tipo de alerta
  if(tipo === 'error') {
    tipo = 'bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md';
  } else if(tipo === 'exito') {
    tipo = 'bg-green-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md';
  } else {
    tipo = 'bg-orange-500 text-white text-center p-3 uppercase font-bold mb-3 rounded-md';
  } 

  return (
    <div 
      className={tipo}>
        <p>{mensaje}</p>
    </div>
  )
}

export default Alerta