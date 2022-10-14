import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header/Header';

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};
