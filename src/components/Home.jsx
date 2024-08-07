import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full text-white text-xl md:text-4xl h-screen bg-[#333333]">
      <div className="w-full text-2xl md:text-6xl absolute top-[20%] text-center animate-pulse">
        BUBBLE GAME
      </div>

      <Link to="/play" className="absolute left-[50%] top-[45%] -translate-x-[50%] border-[1px]  border-white shadow-[5px] px-[8px] py-[2px] text-white rounded ">
        PLAY GAME
      </Link>
      
    </div>
  );
}

export default Home;
