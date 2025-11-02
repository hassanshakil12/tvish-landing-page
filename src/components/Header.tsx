const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm px-4 py-3 sm:px-10">
      <div className="flex items-center justify-between relative">
        <img
          src="./img/logo.png"
          alt="logo"
          width="100px"
          className="filter-[drop-shadow(rgba(200,200,200,0.8)_0px_0px_10px)_drop-shadow(rgba(180,180,180,0.5)_0px_0px_20px)_drop-shadow(rgba(150,150,150,0.3)_0px_0px_30px)]"
        />
      </div>
    </div>
  );
};

export default Header;
