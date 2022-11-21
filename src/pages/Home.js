import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../components/button/Button";
import BrandLoader from "../components/BrandLoader";
import Header from "../components/header/Header";
import { REPO_ROUTE } from "../contents-management/Landing";
import "./home.scss";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://api.github.com/users/jahseed89/repos";

  useEffect(() => {
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
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <Header />
      {loading ? (
        <BrandLoader />
      ) : (
        <section className="loading-profile">
          {userData.map((repo) => {
            return (
              <div className="user-profile" key={repo.id}>
                <div className="user-pic">
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.owner.avatar_url.slice(1)}
                  />
                </div>
                <p className="user-name">
                  <span>Samson Ocran</span>
                  <span>{repo.owner.login}</span>
                </p>
                <p className="user-bio">Web Developer#</p>
              </div>
            );
          })}
        </section>
      )}
      <div className="repo-btn-holder">
        <span>
          <Button
            btnText="Repositories"
            clickHandler={() => navigate(`/${REPO_ROUTE}`)}
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
