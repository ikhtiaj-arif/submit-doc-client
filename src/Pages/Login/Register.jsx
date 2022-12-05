import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Setuser } from "../../API/Setuser";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
    const {user, createUser, updateUser,loading, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);
        createUser(email, password)
          .then((result) => {
            const user = result.user;

            const profile = {
                displayName: name,
                photoURL: null,
              };
              updateUser(profile)
              .then(() => {
                const userData = {
                  email: user?.email,
                  uid: user.uid,
                  displayName: user.displayName,
                };
                Setuser(userData)
                navigate(from, { replace: true });
                console.log(userData);

            }).catch((e) => console.log(e.message));

          })
          .catch((e) => {
            console.log(e.message);
          })
          .finally(() => {
            setLoading(false);
          })
          
        }
        if(loading) {
          return <Spinner/>
        }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
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
