export default function Clientes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">NUESTROS CLIENTES</h2>
      
      {/* IMAGEN CLIENTES - Cambiar src */}
      {/* <img src="/images/clientes-reunion.jpg" alt="Reunión con clientes" className="w-full h-64 object-cover rounded-lg mb-6" /> */}
      
      <div className="prose prose-lg mb-6">
        <p>
          Nos enorgullece contar con la confianza de importantes empresas e instituciones 
          de la región que han elegido nuestros servicios médicos para el cuidado de su 
          capital más valioso: su personal.
        </p>
        <p>
          Estos son algunos de nuestros distinguidos clientes corporativos:
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-2 px-4 border-b">NOMBRE DE LA EMPRESA</th>
              <th className="py-2 px-4 border-b">PÁGINA WEB</th>
              <th className="py-2 px-4 border-b">SERVICIOS CONTRATADOS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Saga Falabella</td>
              <td className="py-2 px-4 border-b">
                <a href="https://www.sagafalabella.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.sagafalabella.com
                </a>
              </td>
              <td className="py-2 px-4 border-b">Chequeos anuales para empleados</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Plaza Vea</td>
              <td className="py-2 px-4 border-b">
                <a href="https://www.plazavea.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.plazavea.com
                </a>
              </td>
              <td className="py-2 px-4 border-b">Atención de emergencias laborales</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Banco de Crédito</td>
              <td className="py-2 px-4 border-b">
                <a href="https://www.bancodecredito.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.bancodecredito.com
                </a>
              </td>
              <td className="py-2 px-4 border-b">Paquetes ejecutivos de salud</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Municipalidad de Trujillo</td>
              <td className="py-2 px-4 border-b">
                <a href="https://www.munitrujillo.gob.pe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.munitrujillo.gob.pe
                </a>
              </td>
              <td className="py-2 px-4 border-b">Convenio de atención preferencial</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">¿Eres una empresa interesada en nuestros servicios corporativos?</h3>
        <p className="mb-4">
          Ofrecemos paquetes especiales para empresas que incluyen:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Chequeos médicos completos para colaboradores</li>
          <li>Atención preferencial en emergencias</li>
          <li>Descuentos especiales en medicamentos</li>
          <li>Programas de salud ocupacional</li>
        </ul>
        <a 
          href="/contacto" 
          className="inline-block bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}