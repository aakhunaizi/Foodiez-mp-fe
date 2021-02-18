import { Link } from "react-router-dom";
import { ShopImage } from "../styles";

const Home = () => {
  return (
    <div>
      <ShopImage
        src="https://crossware.co.nz/wp-content/uploads/2020/09/cute-food-dancing-gif.gif"
        alt="homepage image"
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
