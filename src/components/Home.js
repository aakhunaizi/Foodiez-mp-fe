import { Link } from "react-router-dom";
import { ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#ffd886", height: "92vh" }}>
      <Title>
        <img
          src="https://i.ibb.co/RDs1z2m/foodiez.png"
          alt="foodiez logo"
          width="15%"
          style={{ marginLeft: "2%" }}
        />
      </Title>

      <ShopImage
        src="https://crossware.co.nz/wp-content/uploads/2020/09/cute-food-dancing-gif.gif"
        alt="homepage image"
        width="100%"
      />

      <Link to="/categories">
        <button
          type="button"
          className="btn btn-dark btn-lg"
          style={{ position: "absolute", left: "940px", top: "300px" }}
        >
          Enter
        </button>
      </Link>
    </div>
  );
};

export default Home;
