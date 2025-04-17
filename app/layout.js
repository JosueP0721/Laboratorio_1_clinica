import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";



export const metadata = {
  title: 'Clínica Virgen del Pilar - Vida Sana a Bajo Costo',
  description: 'Clínica médica especializada en brindar servicios de salud accesibles',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="p-6">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
