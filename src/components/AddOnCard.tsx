// components/AddOnCard.tsx
interface AddOnCardProps {
  addOn: string;
  index: number;
}

const AddOnCard = ({ addOn }: AddOnCardProps) => {
  return (
    <div className="group/card relative bg-linear-to-br from-black/60 to-blue-950/20 border-2 border-blue-900/40 rounded-2xl p-5 lg:p-6 xl:p-7 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-blue-400/3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute top-3 left-3 w-3 h-3">
        <div className="w-full h-full border-t-2 border-l-2 border-blue-500 rounded-tl-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-3 right-3 w-3 h-3">
        <div className="w-full h-full border-b-2 border-r-2 border-blue-500 rounded-br-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-150"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-xl mb-3 group-hover/card:scale-110 transition-transform duration-300">
            <span className="text-lg sm:text-xl">{addOn.split(" ")[0]}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center group-hover/card:text-white transition-colors duration-300 font-medium">
          {addOn}
        </p>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
    </div>
  );
};

export default AddOnCard;
