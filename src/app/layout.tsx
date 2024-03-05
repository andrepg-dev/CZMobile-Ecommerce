import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/footer';
import { NavBar } from './components/navbar/navbar';
import { NavBarResponsive } from './components/navbar/responsive/navbar-for-mobile';
import { FullScreenComponent } from './components/sales/full-screen';
import './globals.css';
import ReduxProvider from './store/ReduxProvider';
import { AddToCardMenu } from './components/menu/add-to-cart-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CZ Store - Tienda CZ Mobile HN',
  description: 'CZ Mobile HN es una tienda de celulares en Honduras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ReduxProvider>
          <NavBarResponsive />
          <NavBar />
          <FullScreenComponent />
          <AddToCardMenu />

          {children}
          <Footer />
        </ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
