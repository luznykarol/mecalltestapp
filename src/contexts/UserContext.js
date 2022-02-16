import React, { useState, useEffect, createContext } from "react";
import { sendRequest, getToken } from "../helpers/helpers";
import getUserDataRequest from "../apirequests/userRequests";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const getUser = () => {
    fetch(`http://localhost:8080/profile/${currentUser.username}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      token: getToken,
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser({
          username: data.profileUsername,
          avatar: data.profileAvatar,
          counts: data.counts,
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    currentUser && getUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
