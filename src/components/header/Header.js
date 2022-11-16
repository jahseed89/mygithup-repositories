import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, REPO_ROUTE } from "../../contents-management/Landing";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(`/${HOME_ROUTE}`);
  };

  const navigatetor = useNavigate();
  const navigateToRepo = () => {
    navigatetor(`/${REPO_ROUTE}`);
  };

  return (
    <nav>
      <p>Logo</p>
      <ul>
        {/* <Button clickHandler={() => navigate(`/${HOME_ROUTE}`)} btnText="Home"/>
          <Button clickHandler={() => navigate(`/${REPO_ROUTE}`)} btnText="Repository"/> */}
        <li onClick={navigateToHome}>Home</li>
        <li onClick={navigateToRepo}>Repositories</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
