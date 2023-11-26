// Importing images in Next.js
import DisplayImage from "../../../public/Assets/display.jpg";
const Display = () => {
  return (
    <div className="relative flex items-center">
      <div
        className="flex-shrink-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${DisplayImage.src})` }}></div>

      <div className="absolute inset-0 flex items-center ml-36">
        <div className="p-8 text-purple-800 text-left ">
          <h6 className="text-2xl font-bold mb-2">
            100% Healthier Natural Food
          </h6>
          <h1 className="text-4xl font-bold mb-4">
            Choose the Best <br />
            Healthier Way <br />
            of Life
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
