export default function Contacto() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">CONTACTO</h2>
      
      {/* IMAGEN CONTACTO - Cambiar src */}
      {/* <img src="/images/atencion-cliente.jpg" alt="Atención al cliente" className="w-full md:w-1/2 float-right ml-6 mb-6 rounded-lg" /> */}
      
      <div className="prose prose-lg mb-6">
        <p>
          En <strong>Clínica Virgen del Pilar</strong> agradecemos su interés por contactarnos. 
          Estamos disponibles para responder sus consultas y brindarle la información que necesite.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg my-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Información de Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong>Dirección:</strong> Av. España 1020, Trujillo, La Libertad</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong>Teléfonos:</strong> 044-280286 / 944 123 456 (WhatsApp)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span><strong>Email:</strong> informes@clinicavirgendelpilar.com</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-700 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Horario de Atención:</strong> Lunes a Domingo, 24 horas</span>
            </li>
          </ul>
        </div>
        
        <p>
          Complete el siguiente formulario y nos comunicaremos con usted a la brevedad posible.
        </p>
      </div>
      
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="nombre">Nombre Completo *</label>
            <input 
              type="text" 
              id="nombre" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="telefono">Teléfono / Celular *</label>
            <input 
              type="tel" 
              id="telefono" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="asunto">Asunto *</label>
            <select 
              id="asunto" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione un asunto</option>
              <option value="consulta">Consulta General</option>
              <option value="cita">Solicitud de Cita</option>
              <option value="empresas">Servicios Corporativos</option>
              <option value="quejas">Quejas o Sugerencias</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium" htmlFor="mensaje">Mensaje *</label>
          <textarea 
            id="mensaje" 
            rows="5" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <div className="mb-6 flex items-center">
          <input 
            type="checkbox" 
            id="contacto" 
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="contacto" className="ml-2 text-gray-700">
            Deseo recibir información sobre promociones y servicios
          </label>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-700 text-white py-3 px-8 rounded-md hover:bg-blue-800 transition duration-300 font-medium"
        >
          Enviar Mensaje
        </button>
      </form>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Cómo llegar</h3>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-800 mb-2">En autobús</h4>
            <p className="text-gray-600">Rutas 05, 12 y 44 - Paradero Clínica Virgen del Pilar</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-800 mb-2">En taxi</h4>
            <p className="text-gray-600">Referencia: Frente al Parque Industrial</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-blue-800 mb-2">Estacionamiento</h4>
            <p className="text-gray-600">Contamos con estacionamiento gratuito para pacientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}