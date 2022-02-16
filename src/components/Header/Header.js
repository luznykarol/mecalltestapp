import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  // const { avatar, username } = currentUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();

    window.open("http://localhost:3000", "_self");
  };

  return (
    <header className="w-full shadow-md shadow-grey-light">
      <div className="max-w-container mx-auto w-full flex justify-between items-center px-6">
        <Link className="" to="/">
          LOGO
        </Link>

        <nav className="flex justify-start items-center">
          {currentUser ? (
            <>
              <Button
                onClick={handleLogout}
                className="my-4 ml-4"
                color="red"
                text="Logout"
              />
            </>
          ) : (
            <div className="py-4">
              <Link className="mr-4 " to="/register">
                Register
              </Link>
              <Link className="" to="/login">
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
