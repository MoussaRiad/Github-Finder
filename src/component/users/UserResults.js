import React, { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

export default function UserResults() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
//       headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
//     });
//     console.log("resultes response =", response);
//     const data = await response.json();
//     console.log("resultes data =", data);
//     setUsers(data);
//     setLoading(false);
//   };
  const {users,loading,fetchUsers} =useContext(GithubContext)

//   useEffect(() => {
//     fetchUsers();
//   }, []);

  if (loading) {return <Spinner />} 
  else return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {/* <h1>Users number :{users.length}</h1>
      <h1>GITHUB URL :{process.env.REACT_APP_GITHUB_URL}</h1> */}
      {users.map((user) => (
          <UserItem key={user.id} user={user}/>
          ))
       }
    </div>
  );
}
