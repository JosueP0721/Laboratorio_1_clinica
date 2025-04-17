import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">MENU</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-2 px-4 hover:bg-blue-700 rounded">
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/quienes-somos" className="block py-2 px-4 hover:bg-blue-700 rounded">
              QUIENES SOMOS
            </Link>
          </li>
          <li>
            <Link href="/clientes" className="block py-2 px-4 hover:bg-blue-700 rounded">
              CLIENTES
            </Link>
          </li>
          <li>
            <Link href="/costos" className="block py-2 px-4 hover:bg-blue-700 rounded">
              COSTOS
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="block py-2 px-4 hover:bg-blue-700 rounded">
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}