import React, { useContext } from "react";
import MyContext from "../context";
import BrandLoader from "../components/BrandLoader";
import Button from "../components/button/Button";
import Header from "../components/header/Header";
import "./repo.scss";

const Repos = () => {

  const { loading, userData, getRepositories} = useContext(MyContext)

  return (
    <div className="container">
      <Header />
      <section className="section">
        <h2>Repository Name</h2>
        <div className="get-repo-holder">
          <Button
            btnText="Show All Repositories"
            clickHandler={getRepositories}
          />
        </div>
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
