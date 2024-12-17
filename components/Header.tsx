interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full bg-gray-800 text-white py-4 mb-8 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        <img src="/images/dog-head-profile-svgrepo-com.svg" alt="dog head icon" className="w-16 h-16 mr-2 inline-block" />
          {title} &nbsp; <span className="!text-md font-normal">a dog breed search app</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
