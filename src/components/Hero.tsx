import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="sm:w-full md:w-[100%] sm:p-5 sm:h-auto md:h-[500px] flex sm:flex-col md:flex-row sm:justify-center md:justify-center sm:items-center md:items-center bg-black w-full">
        <div className="sm:w-full md:w-[50%] p-4 text-center sm:text-left">
          <h3 className="text-yellow-500 font-sans">It's Quick & Amusing</h3>

          <h1 className="text-white font-bold font-sans sm:text-2xl md:text-3xl lg:text-5xl flex flex-row mt-2">
            <div className="text-yellow-400">Th</div>e Art of Speed
          </h1>
          <h2 className="text-white font-bold sm:text-xl md:text-3xl lg:text-5xl pt-4">
            Food Quality
          </h2>
          
          {/* Description */}
          <div className="flex sm:flex-wrap sm:justify-center md:justify-start pt-5 pb-4 gap-4">
            <p className="text-white text-sm sm:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              facere voluptatum tempore massa conque.
            </p>
          </div>

          {/* Button */}
          <button className="bg-yellow-500 w-190 sm:w-full md:w-auto sm:px-3 md:px-7 sm:text-sm py-0 text-gray-400 rounded-full h-10">
            See Menu
          </button>
        </div>

        {/* Image */}
        <div className="sm:w-full md:w-[40%] lg:w-[30%] pl-7 justify-center items-center flex flex-row">
          <Image
            width={624.15}
            height={633.51}
            src="/hero-plate.png"
            alt="heroPlate"
            className="w-full h-auto shadow-md"
          />
        </div>
      </div>
    </main>
  );
}

