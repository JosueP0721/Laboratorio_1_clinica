export default function QuienesSomos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">QUIENES SOMOS</h2>
      
      {/* IMAGEN HISTORIA - Cambiar src */}
      {/* <img src="/images/fundadores.jpg" alt="Fundadores de la clínica" className="w-full md:w-1/2 float-right ml-6 mb-6 rounded-lg" /> */}
      
      <div className="prose prose-lg">
        <p>
          <strong>Clínica Virgen del Pilar</strong> fue fundada en 1995 por un grupo de médicos trujillanos 
          comprometidos con hacer accesible la salud de calidad para todos los estratos sociales.
        </p>
        
        <h3 className="text-xl font-semibold text-blue-700 mt-6">Nuestra Historia</h3>
        <p>
          Comenzamos como un pequeño consultorio en el centro de Trujillo y gracias a la 
          confianza de nuestros pacientes, hoy somos una clínica con 3 pisos de infraestructura 
          moderna y más de 20 especialidades médicas.
        </p>
        
        <h3 className="text-xl font-semibold text-blue-700 mt-6">Nuestros Valores</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Ética profesional:</strong> Priorizamos el bienestar del paciente ante todo</li>
          <li><strong>Accesibilidad:</strong> Precios justos y planes de pago flexibles</li>
          <li><strong>Innovación:</strong> Equipos médicos de última generación</li>
          <li><strong>Calidez:</strong> Trato humano y personalizado</li>
        </ul>
        
        {/* IMAGEN INSTALACIONES - Cambiar src */}
        {/* <img src="/images/instalaciones.jpg" alt="Instalaciones de la clínica" className="w-full h-64 object-cover rounded-lg my-6" /> */}
        
        <h3 className="text-xl font-semibold text-blue-700 mt-6">Nuestro Equipo</h3>
        <p>
          Contamos con más de 50 profesionales de la salud, entre médicos generales, especialistas, 
          enfermeras y técnicos, todos certificados y con amplia experiencia.
        </p>
      </div>
    </div>
  );
}