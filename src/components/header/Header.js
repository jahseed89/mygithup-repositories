import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE, REPO_ROUTE } from "../../contents-management/Landing";
import "./header.scss";


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
      <h2>Github App</h2>
      <ul>
        <li onClick={navigateToHome}>Home</li>
        <li onClick={navigateToRepo} className="repo">Repositories<span>30</span></li>
        <li>Projects</li>
        <li>Packages</li>
        <li>Stars</li>
        {/* <li>*888888</li> */}
      </ul>
    </nav>
  );
};

export default Header;
