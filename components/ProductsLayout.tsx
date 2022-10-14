import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}
export const ProductsLayout = ({ children }: MainProps) => {
  return (
    <div className=" mx-auto max-w-screen-xl px-4 py-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:grid-cols-4">
      {children}
    </div>
  );
};
