import Nav from '../components/Nav';
export interface layoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: layoutProps) => {
  return (
    <div className="mx-6 md:max-w-7xl md:mx-auto">
      <Nav />
      <main className="px-4">{children}</main>
    </div>
  );
};
