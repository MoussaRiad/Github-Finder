import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
export default function UserSearch() {
  const [text, setText] = useState("");
  const {users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleClear = () => {
    setText("");
    console.log("clear");
    dispatch({type:'RESET_USERS'})
    // resetSearch();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      setAlert("Please wait", "info");
      dispatch({ type: "SET_LOADING"});
      console.log('loading..')
      const users = await searchUsers(text);
      console.log('users =',users)
      dispatch({ type: "GET_USERS", payload: users });
    } else {
      setAlert("Please enter something", "error");
    }
    setText("");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                value={text}
                placeholder="Search..."
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
