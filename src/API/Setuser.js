
// save user to database

export const Setuser = (userData) => {
    fetch(`/users/${userData?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
};
