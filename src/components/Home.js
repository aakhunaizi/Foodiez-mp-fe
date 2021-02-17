import { StyledTitle } from "../styles";
import CreateCategoryButton from "./buttons/CreateButton";

const Home = () => {
  return (
    <div>
      <div
        class="vh-100"
        style={{
          backgroundImage: `url(https://crossware.co.nz/wp-content/uploads/2020/09/cute-food-dancing-gif.gif)`,
          backgroundSize: "30% 60%",
        }}
      >
        <StyledTitle>
          <img
            src="https://media.discordapp.net/attachments/811518797282017300/811599128714674176/foodiez.png"
            alt="logo"
          />
        </StyledTitle>
        <button
          type="button"
          class="btn btn-dark btn-lg"
          style={{ position: "absolute", left: "940px", top: "300px" }}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;
