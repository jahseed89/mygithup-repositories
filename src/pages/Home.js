import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import BrandLoader from "../components/BrandLoader";
import Header from "../components/header/Header";
import { REPO_ROUTE } from "../contents-management/Landing";
import MyContext from '../context'
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const { loading, userData } = useContext(MyContext)

  return (
    <div className="container">
      <Header />
      {loading ? (
        <BrandLoader />
      ) : (
        <section className="loading-profile">
          {userData.map((repo) => {
            return (
              <div className="user-profile">
                <div className="user-pic" key={repo.id}>
                  <img
                    src={repo.owner.avatar_url}
                    alt="#"
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
