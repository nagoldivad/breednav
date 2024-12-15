const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} BreedNav. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
