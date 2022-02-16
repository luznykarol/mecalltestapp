import React, { useState, useContext, useEffect } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser({
          username: data.username,
          avatar: data.avatar,
        });
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("myName", data.username);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <>
      <h2 className="text-center font-bold mb-4">Login</h2>
      <form
        className="w-full flex-col flex justify-center items-center"
        onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={username}
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          onChange={handleChange}
          value={password}
          name="password"
          className="mb-0"
          type="password"
          placeholder="Password"
        />

        <Button type="submit" className="mt-4" color="green" text="Submit" />
      </form>
    </>
  );
};

Login.propTypes = {};

export default Login;
