const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-12 mt-8 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
        <img src="/images/dog-head-profile-svgrepo-com.svg" alt="dog head icon" className="w-16 h-16 mr-2 inline-block" />
          <p className="text-md">
            BreedNav<br />
            Created by David &amp; Charla&nbsp;(
            <a
              className="hover:underline hover:text-blue-400 transition-colors duration-200"
              href="https://nagoldivad.com"
              aria-label="Visit David's website"
            >
              nagoldivad
            </a>
            )<br />
            2024<br />
            <a
              className="hover:underline hover:text-blue-400 transition-colors duration-200"
              href="https://unlicense.org/"
              aria-label="Learn more about the Unlicense"
            >
              Unlicense
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          This app uses the{" "}
          <a
            className="hover:underline hover:text-blue-400 transition-colors duration-200"
            href="https://www.thedogapi.com/"
            aria-label="Visit The Dog API"
          >
            Dog API
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
