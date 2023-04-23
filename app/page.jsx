import Image from "next/image";
import Link from "next/link";
import PhoneRoute from "./components/PhoneRoute";

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <div className="text-center">
        <h1 className="text-lg mt-16">Talk to people with similar</h1>
        <h1 className="text-bold text-2xl">Experiences</h1>
      </div>
      <div className="h-[160px] mt-10 flex justify-around">
        <div className="h-full w-[30%] border border-green-800 rounded-lg text-center">
          <div className="w-1/2 border border-green-500 h-[58px] rounded-full m-auto mt-3"></div>
          <p className="text-[12px] mt-2">Annu</p>
          <p className="text-[10px] text-gray-300 mt-2">helps with</p>
          <button className="border border-green-400 bg-green-400 text-black text-sm px-3 mt-1 rounded-lg">
            Breakup
          </button>
        </div>
        <div className="h-full w-[30%] border border-green-800 rounded-lg text-center">
          <div className="w-1/2 border border-green-500 h-[58px] rounded-full m-auto mt-3"></div>
          <p className="text-[12px] mt-2">Tribhu</p>
          <p className="text-[10px] text-gray-300 mt-2">helps with</p>
          <button className="border border-green-400 bg-green-400 text-black text-sm px-3 mt-1 rounded-lg">
            Breakup
          </button>
        </div>
        <div className="h-full w-[30%] border border-green-800 rounded-lg text-center">
          <div className="w-1/2 border border-green-500 h-[58px] rounded-full m-auto mt-3"></div>
          <p className="text-[12px] mt-2">Aish</p>
          <p className="text-[10px] text-gray-300 mt-2">helps with</p>
          <button className="border border-green-400 bg-green-400 text-black text-sm px-3 mt-1 rounded-lg">
            Breakup
          </button>
        </div>
      </div>
      <div className="mt-[40%]">
       <PhoneRoute/>
      </div>
    </div>
  );
};

export default HomePage;
