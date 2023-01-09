import BrandLoader from "../components/BrandLoader";
import Header from "../components/header/Header";
import MyPagination from "../components/pagination/MyPagination";
import "./repo.scss";

const Repos = ({ loading, userData, postPerPage, totalPost, paginate }) => {
  
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
      <div className="pagination-holder">
        <MyPagination
          postPerPage={postPerPage}
          totalPost={totalPost}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Repos;
