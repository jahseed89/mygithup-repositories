import axios from "axios";
import React, { useState } from "react";
import BrandLoader from "../components/BrandLoader";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import "./repo.scss";

const Repos = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api.github.com/users/jahseed89/repos";

  const getRepositories = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <Header getUserRepo={getRepositories} />
      <div className="btn-holder">
        <Button
          btnText="Show All Repositories"
    
          clickHandler={getRepositories}
        />
      </div>
      <section className="section">
        <h2>Repository Name</h2>
        <h2>Repository Link</h2>
      </section>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {userData.map((repo) => {
            return (
              <div className="main" key={repo.id}>
                <div className="user-profile">
                  <p className="user-name">{repo.url.slice(39)} </p>
                </div>
                <a href={repo.html_url} target="blank" className="user-repo">
                  {repo.html_url}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Repos;
