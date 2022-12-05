export const GetRole = async (email) => {
    const url = `https://server-angon777.vercel.app/users/${email}`;
    const res = await fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    });
    const data = await res.json();
    const userRole = data?.role;
    return userRole;
  };
  