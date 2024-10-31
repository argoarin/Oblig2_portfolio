import React from 'react';
import '../App.css'; // Opprett en layout-stilfil for felles styling

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Min Portfolio</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Min Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
