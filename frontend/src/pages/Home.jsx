import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../Context/SibebarContext";
import '../utils/style.css';
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/background.mp4"; // Correct import for the video

const Home = () => {
  const { showMenu, setShowMenu } = useContext(SidebarContext);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, []);

  const token = localStorage.getItem("access_token") || null;

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center flex-col">
      {/* Video background */}
      <video
        src={backgroundVideo} // The video file you imported
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center items-center space-y-6 bg-[rgba(0,0,0,0.5)] w-full h-screen lg:space-y-8 z-10">
        <h1 className="text-4xl lg:text-6xl text-white font-extrabold drop-shadow-lg">
          Melody Mate
        </h1>
        <p className="text-white text-2xl lg:text-4xl drop-shadow-md">
          Upload & Listen to your favorite songs
        </p>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
          {
            (token ? (
              <Link to={'/upload'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">
                Upload
              </Link>
            ) : (
              <Link to={'/login'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">
                Login
              </Link>
            ))
          }
          <Link to={'/explore'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">
            Stream
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;