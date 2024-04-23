import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)
  //console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Home</h1>
          <p>
          Welcome to SanyaEstate, where excellence meets opportunity in the realm of real estate. As a premier player in the industry, we pride ourselves on our unwavering commitment to professionalism, integrity, and client satisfaction.  Come experience the difference with us, where your real estate aspirations become reality.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>150+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>700+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/logoo.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
