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
        <li onClick={navigateToHome}>Home</li>
        <li onClick={navigateToRepo} className="repo">Repositories<span>30</span></li>
        <li>Projects</li>
        <li>Packages</li>
        <li>Stars</li>
      </ul>
    </nav>
  );
};

export default Header;
