import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form action="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
           
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
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
                    placeholder="******"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="divider">OR</div>
              <p className="text-sm font-medium">
                Don't Have An Account?{" "}
                <Link to="/register" className="text-purple-600">
                  Register now
                </Link>{" "}
              </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
