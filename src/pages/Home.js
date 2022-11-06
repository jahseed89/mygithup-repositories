import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as ContentMgtURL from "../urls/Routing";
import "./home.scss";
import Button from "../components/button/Button";
import BrandLoader from "../components/BrandLoader";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const url = "https://api.github.com/users/jahseed89/repos";

  const getUserRepo = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  const navigator = useNavigate();
  const handleClick = () => {
    navigator(`${ContentMgtURL.LANDING_ROUTE}/repositories`);
  };
  return (
    <div className="container">
      <Button
        clickHandler={getUserRepo}
        isActive={activeUser}
        btnText="Get Repo"
      />
      <nav>
        <p>Logo</p>
        <ul>
          <li>Home</li>
          <li>Repository</li>
          <li>Contact</li>
        </ul>
        <div className="user-profile"></div>
      </nav>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div>
                <div className="user-profile">
                  <div className="user-pic"></div>
                  <p className="user-name">{repo.owner.login} </p>
                  <p className="user-username">jahseed89</p>
                  <p className="user-bio">A web Developer, ready to work</p>
                </div>
                <div className="user-repo">
                  <input type="search" placeholder="Find a repositories..." />
                  {repo.owner.url}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Button clickHandler={handleClick} />
    </div>
  );
};

export default Home;
