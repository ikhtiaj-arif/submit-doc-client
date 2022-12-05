import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Setuser } from "../../API/Setuser";
import Spinner from "../../Components/Spinner";
import UserContext, { AuthContext } from "../../Context/UserContext";

const Login = () => {
    const {logInUser,setUser,loading, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then((result) => {
          const user = result.user;

          const currUser = {
            email: user.email,
          };
          Setuser(currUser);
          navigate(from, { replace: true });
          console.log(user);
        })
        .catch((e) => {
          console.log(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    
    if(loading) {
      return <Spinner/>
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
           
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
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
                    type="password"
                    placeholder="******"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
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
