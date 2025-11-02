interface ButtonProps {
  name: string;
  href?: string;
}

const Button = ({ name, href = "#signup" }: ButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-linear-to-r from-red-600 to-red-600 hover:from-red-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
    >
      🚀 {name}
    </button>
  );
};

export default Button;
