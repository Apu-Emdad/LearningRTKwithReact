import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  //   const user = dispatch(fetchUsers());
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of all users </h2>
      {users.loading && <div>Loading ...</div>}
      {!users.loading && users.users ? (
        <ul>
          {users.users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : null}
      {!users.laoding && users.error ? <div>{users.error}</div> : null}
    </div>
  );
};

export default UserView;
