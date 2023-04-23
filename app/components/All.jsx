import React from "react";

const All = () => {
  return (
    <>
      <div className=" h-[186px] rounded-lg mt-2 p-2 bg-zinc-900 ">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="w-[65px] h-[65px] rounded-full border border-green-500"></div>
                <div>
                    <p>Neetesh</p>
                    <p>4.88⭐ (1k+)</p>
                    <p className="mt-1 text-sm text-gray-400">M-22 yrs</p>
                </div>
            </div>
            <div>
                <p className="text-lg text bold text-gray-400">Loneliness</p>
            </div>
        </div>
        <p className="my-3 text-sm text-gray-400">I was devastated after I lost my father</p>
        <div className="flex justify-between items-center">
            <span className="my-3 text-sm text-gray-400">Exp: 666 hrs</span>
            <button className="text-green-600 border border-green-500 ring-1 ring-gray-500 px-3 p-1 rounded">Talk Now</button>
        </div>
      </div>
      <div className=" h-[186px] rounded-lg mt-2 p-2 bg-zinc-900 ">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="w-[65px] h-[65px] rounded-full border border-green-500"></div>
                <div>
                    <p>Honey</p>
                    <p>4.6⭐ (1k+)</p>
                    <p className="mt-1 text-sm text-gray-400">F-22 yrs</p>
                </div>
            </div>
            <div>
                <p className="text-lg text bold text-gray-400">Loneliness</p>
            </div>
        </div>
        <p className="my-3 text-sm text-gray-400">Ex NEET Aspirant faced depression</p>
        <div className="flex justify-between items-center">
            <span className="my-3 text-sm text-gray-400">Exp: 555 hrs</span>
            <button className="text-green-600 border border-green-500 ring-1 ring-gray-500 px-3 p-1 rounded">Talk Now</button>
        </div>
      </div>
      {/* <div className=" h-[186px] rounded-lg mt-2 p-2 bg-zinc-900 ">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="w-[65px] h-[65px] rounded-full border border-green-500"></div>
                <div>
                    <p>Tribhuwan</p>
                    <p>4.5⭐ (755)</p>
                    <p className="mt-1 text-sm text-gray-400">M-32 yrs</p>
                </div>
            </div>
            <div>
                <p className="text-lg text bold text-gray-400">Relationship</p>
            </div>
        </div>
        <p className="my-3 text-sm text-gray-400">I was a part of a toxic marriage</p>
        <div className="flex justify-between items-center">
            <span className="my-3 text-sm text-gray-400">Exp: 666 hrs</span>
            <button className="text-green-600 border border-green-500 ring-1 ring-gray-500 px-3 p-1 rounded">Talk Now</button>
        </div>
      </div> */}
    </>
  );
};

export default All;
