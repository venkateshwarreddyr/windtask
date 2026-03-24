import React, { useEffect, useState, useContext } from "react";
import User from "../../component/User";
import { DataContext } from "./../../context/dataContext";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const userId = Number(useParams().userId);
  const [user, setUser] = useState({});
  const context = useContext(DataContext);

  useEffect(() => {
    const userDetails = context.users.find((u) => u.id === userId);
    if (userDetails) {
      setUser(userDetails);
    }
  }, [context.users, userId]);

  return (
    <User {...user} isLoading={context.loading} />
  );
};

export default UserPage;
