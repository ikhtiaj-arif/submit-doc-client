import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.png";

const HomeBanner = () => {
  return (
    <div className=" relative w-full">
      <div className="carousel-img">
        <img src={bg} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <section className="md:py-6 w-full md:w-2/4 dark:text-gray-7000">
          <div className="mx-auto flex flex-col items-center p-2 space-y-4  md:px-4 ">
            <h1 className="text-xl md:text-5xl font-bold leading-none text-center">
              You Have To LogIn To Submit
            </h1>
            <p className="md:text-xl md:font-medium md:py-8 text-center">
              Please create an account or login to continue
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="btn btn-outline btn-primary">
              <Link to="/login">Log In</Link>
              </button>
              <button className="btn btn-active btn-primary">
                <Link to="/register">Register Now</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default HomeBanner;
