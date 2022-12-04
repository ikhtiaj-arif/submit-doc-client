import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form action="w-full">
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 md:w-2/4 lg:w-1/4 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="divider">OR</div>
              <p className="text-sm font-medium">
                Already Have An Account?{" "}
                <Link to="/login" className="text-purple-600">
                  Log in now
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
