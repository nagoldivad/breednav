import React from "react";


interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full bg-indigo-800 text-white py-4 mb-8 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <img src="/images/dog-head-profile-svgrepo-com.svg" alt="dog head icon" className="w-16 h-16 mr-2 inline-block" />
          {title}
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
