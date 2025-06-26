import { ScreenComponentType } from "../../utilities/commonUtils";
import Header from "./Header";
import "./Home.css";
import HomeFooter from "./HomeFooter";
import Profile from "./Profile";

const Home = ({ id }: ScreenComponentType) => {
  return (
    <div className="home-container" id={id}>
      <Header />
      <Profile />
      <HomeFooter />
    </div>
  );
};

export default Home;
