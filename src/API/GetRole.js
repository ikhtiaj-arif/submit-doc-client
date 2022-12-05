export const GetRole = async (email) => {
  const url = `https://submit-doc-server.vercel.app/user?email=${email}`;
  const res = await fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem("user-token")}`,
    },
  });
  const data = await res.json();
  console.log(data);
  const userRole = data?.role;
  console.log(userRole);
  return userRole;
};
