import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import Spinner from "../../Components/Spinner";


const Submit = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const course = form.course.value;
    const email = form.email.value;
    const message = form.message.value;

    const document = {
      name, email, course, message
    }
    // console.log(name, email, course, message);
    fetch("http://localhost:5000/documents", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(document),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("booking confirmed!");
          navigate("/dashboard");
        }
      });

  }
  if(loading){
    return <Spinner/>
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="card flex-shrink-0 md:w-2/4 lg:w-1/4 shadow-2xl bg-base-100"
      >
        <div className="card-body">
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            disabled
            placeholder="Full Name"
            className="input input-bordered w-full mb-4"
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            disabled
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />
              <select
              name="course"
              className="select select-bordered w-full max-w-xs hover:select-success"
            >
              <option disabled selected>
                Chose Your Course
              </option>

              <option value="React.Js">React.JS</option>
              <option value="Express">Express</option>
              <option value="Next.js">Next.js</option>
              <option value="Redux">Redux</option>
            </select>

          

          <textarea
            className="textarea bg-gray-200 w-full mb-4"
            name="message"
            required
            placeholder="Your feedback"
          ></textarea>

          <button type="submit" className="btn w-full btn-success text-white">
            Submit Document
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
