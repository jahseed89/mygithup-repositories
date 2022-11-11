import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as ContentMgtURL from "../urls/Routing";
import "./home.scss";
import Button from "../components/button/Button";
import BrandLoader from "../components/BrandLoader";
import avatar from "../assets/images/samavatar.jpg";

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
        console.log(response.data);
        setUserData(response.data);
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
      <span>
        <Button
          clickHandler={getUserRepo}
          isActive={activeUser}
          btnText="Get Repo"
        />
      </span>
      <nav>
        <p>Logo</p>
        <ul>
          <li>Home</li>
          <li>Repository</li>
          <li>Contact</li>
        </ul>
        <div className="user-profile"></div>
      </nav>
      <section className="landing-user">
        <div className="user-profile">
          <div className="user-pic">
            <img src={avatar} alt="img" />
          </div>
          <p className="user-name">
            <span>Samson Ocran</span>
            <span>jahseed89</span>
          </p>
          <p className="user-bio">Web Developer#</p>
        </div>
      </section>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div className="main" key={repo.owner.id}>
                <div className="user-profile">
                  <p className="user-name">{repo.owner.login} </p>
                </div>
                <Link onClick={handleClick} className="user-repo" to={repo.svn_url} >{repo.html_url}</Link>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Home;
