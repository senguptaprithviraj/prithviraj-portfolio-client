import { ScreenComponentType } from "../../utilities/commonUtils";
import Header from "./Header";
import "./Home.css";
import Profile from "./Profile";

const Home = ({ id }: ScreenComponentType) => {
  return (
    <div className="home-container" id={id}>
      <Header />
      <Profile />
    </div>
  );
};

export default Home;
