interface ButtonProps {
  name: string;
  href?: string;
}

const ButtonAlt = ({ name, href = "#signup" }: ButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-transparent border-2 border-red-600 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
    >
      ⚡ {name}
    </button>
  );
};

export default ButtonAlt;
