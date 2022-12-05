
// save user to database

export const Setuser = (userData) => {
    fetch(`http://localhost:5000/users/${userData?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // save token to local storage
        localStorage.setItem("user-token", data.token);
      });
};



