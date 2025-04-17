import Image from 'next/image';
import React from 'react';
import ImageInicio from '@/public/inicio.webp'

export default function Home() {
  return (
    <div className=" mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">BIENVENIDOS A CLÍNICA VIRGEN DEL PILAR</h2>
      
      <div className='flex gap-10'>
        <Image
          src={ImageInicio} // Cambiar por la ruta de la imagen
          alt="Fachada de la clínica" 
          className="w-full object-cover rounded-lg mb-6" />
        
        <div className="prose prose-lg">
          <p className="text-lg">
            En <strong>Clínica Virgen del Pilar</strong> nos dedicamos a brindar atención médica de calidad 
            a precios accesibles para toda la comunidad de Trujillo y sus alrededores.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-700 mt-6">Nuestra Misión</h3>
          <p>
            Proporcionar servicios de salud integrales con calidez humana, tecnología moderna 
            y personal altamente calificado, manteniendo siempre costos accesibles para nuestros pacientes.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-700 mt-6">Nuestra Visión</h3>
          <p>
            Ser reconocidos como la clínica líder en la región por nuestra excelencia médica 
            y compromiso con la salud preventiva, llegando a más familias cada año.
          </p>
          
          {/* IMAGEN EQUIPO MÉDICO - Cambiar src */}
          {/* <img src="/images/equipo-medico.jpg" alt="Nuestro equipo médico" className="w-full h-64 object-cover rounded-lg my-6" /> */}
          
          <h3 className="text-xl font-semibold text-blue-700 mt-6">Servicios Destacados</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consultas médicas generales y especializadas</li>
            <li>Laboratorio clínico completo</li>
            <li>Imagenología (Rayos X, Ecografías)</li>
            <li>Medicina preventiva y chequeos anuales</li>
            <li>Farmacia con medicamentos a bajo costo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}