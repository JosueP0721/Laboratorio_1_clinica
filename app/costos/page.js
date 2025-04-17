export default function Costos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">LISTADO DE SERVICIOS Y SUS COSTOS</h2>
      
      {/* IMAGEN SERVICIOS - Cambiar src */}
      {/* <img src="/images/servicios-medicos.jpg" alt="Nuestros servicios médicos" className="w-full h-64 object-cover rounded-lg mb-6" /> */}
      
      <div className="prose prose-lg mb-6">
        <p>
          En Clínica Virgen del Pilar creemos en la transparencia de precios. 
          A continuación presentamos nuestros servicios más solicitados con sus costos 
          referenciales (sujetos a cambio sin previo aviso).
        </p>
        <p className="text-sm italic">
          * Los precios pueden variar según complejidad. Consulte por promociones especiales.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Consultas */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Consultas Médicas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800">Consulta General</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 50.00</p>
              <p className="text-sm text-gray-600">Incluye evaluación básica</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Consulta Especializada</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 80.00 - S/ 120.00</p>
              <p className="text-sm text-gray-600">Cardiología, Dermatología, etc.</p>
            </div>
          </div>
        </div>
        
        {/* Exámenes */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Exámenes de Laboratorio</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-gray-800">Hemograma Completo</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 35.00</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Perfil Lipídico</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 55.00</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Prueba de Glucosa</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 25.00</p>
            </div>
          </div>
        </div>
        
        {/* Imagenología */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Imagenología</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800">Rayos X (Simple)</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 60.00</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Ecografía Abdominal</h4>
              <p className="text-2xl font-bold text-blue-800">S/ 120.00</p>
            </div>
          </div>
        </div>
        
        {/* Paquetes */}
        <div className="bg-blue-50 p-6 rounded-lg shadow border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Paquetes Promocionales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-lg text-blue-800 mb-2">Chequeo Preventivo</h4>
              <p className="text-3xl font-bold text-blue-800 mb-2">S/ 180.00</p>
              <p className="text-gray-600 mb-3">(Ahorra S/ 45.00)</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Consulta médica general</li>
                <li>Hemograma completo</li>
                <li>Perfil bioquímico</li>
                <li>Examen de orina</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-lg text-blue-800 mb-2">Chequeo Ejecutivo</h4>
              <p className="text-3xl font-bold text-blue-800 mb-2">S/ 350.00</p>
              <p className="text-gray-600 mb-3">(Ahorra S/ 120.00)</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Consulta con médico internista</li>
                <li>Perfil lipídico completo</li>
                <li>Pruebas de función hepática</li>
                <li>Electrocardiograma</li>
                <li>Ecografía abdominal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}