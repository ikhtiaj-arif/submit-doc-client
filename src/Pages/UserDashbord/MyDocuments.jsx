import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../Components/Spinner";
import { AuthContext } from "../../Context/UserContext";

const MyDocuments = () => {
  const { user } = useContext(AuthContext);

  const url = `https://submit-doc-server.vercel.app/documents?email=${user?.email}`;
  const {
    data: documents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Category"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("user-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(documents);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-900">
        <div className="flex flex-col overflow-x-auto text-xs">
          <div className="flex text-left bg-gray-400">
            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3"></div>
            <div className="w-32 px-2 py-3 sm:p-3">Course</div>
            <div className="flex-1 px-2 py-3 sm:p-3">Feedback</div>
          </div>
          {documents.map((doc) => (
            <div
              key={doc._id}
              className="flex border-b border-opacity-20 bg-gray-300 border-gray-900 text-gray-900"
            >
              <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3"></div>
              <div className="w-32 px-2 py-3 sm:p-3">
                <p>{doc.course}</p>
              </div>
              <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                {doc.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
