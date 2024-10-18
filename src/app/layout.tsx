import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 w-full z-10">
        <ul className="flex space-x-4 p-4">
          <li>
            <a href="#about-us" className="cursor-pointer text-lg">About Us</a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer text-lg">Services</a>
          </li>
          <li>
            <a href="#team" className="cursor-pointer text-lg">Team</a>
          </li>
        </ul>
      </nav>

      <main className="pt-16">{children}</main> {/* Add padding to avoid overlapping with the fixed navbar */}
    </div>
  );
};

export default Layout;