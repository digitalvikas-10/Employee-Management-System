import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-5 mt-10 rounded-2xl flex items-center justify-start gap-5 flex-wrap overflow-y-auto ml-12"
    >

      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5">
      <div className="flex justify-between items-center ">
          <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-base">22 feb 2026</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a youtube video</h2>
      <p className="text-sm  mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur ad repudiandae molestias. Obcaecati, soluta!</p>
      </div>
    </div>
  );
};

export default TaskList;
