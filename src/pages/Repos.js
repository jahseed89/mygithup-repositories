import { useState } from "react";
import ReactPaginate from "react-paginate";
import BrandLoader from "../components/BrandLoader";
import Header from "../components/header/Header";
import "./repo.scss";

const Repos = ({ loading, userData}) => {

  const [pageNumber, setPageNumber] = useState(0)

  const repoPerPage = 5

  const repoVisited = pageNumber * repoPerPage

  const displayRepo = userData.slice(repoVisited, repoVisited + repoPerPage)

  const countRepo = Math.ceil(userData.length / repoPerPage) 

  const changeRepo = ({selected}) => {
    setPageNumber(selected)
  }


  return (
    <div className="container">
      <Header />
      <section className="section">
        <h2>Repository Name</h2>
        <h2>Repository Link</h2>
      </section>
      {loading ? (
        <BrandLoader />
      ) : (
        <div className="user-wrapper">
          {displayRepo.map((repo) => {
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
      <div className="pagination-holder">
        <ReactPaginate 
          prevPageRel={"Prev"}
          nextLabel={"Next"}
          pageCount={countRepo}
          onPageChange={changeRepo}
          containerClassName={"pagination-btn"}
          activeClassName={"paginate-active"}
        />
      </div>
    </div>
  );
};

export default Repos;
