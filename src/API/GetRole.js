export const GetRole = async (email) => {
    const url = `http://localhost:5000/user?email=${email}`;
    const res = await fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("user-token")}`,
      },
    });
    const data = await res.json();
    console.log(data);
    const userRole = data?.role
    console.log(userRole);
    return userRole;
  };
  