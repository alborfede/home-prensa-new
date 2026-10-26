import './globals.css';
// Agregamos '/layout/' a las rutas de importación
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export const metadata = {
  title: 'Prensa Obrera',
  description: 'Diario digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
