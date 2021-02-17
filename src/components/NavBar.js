// Styling
import { ThemeButton, LogoDark, LogoLight, NavProduct } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      {props.currentTheme === "light" ? (
        <LogoDark to="/">
          <img
            src="https://cdn.discordapp.com/attachments/811518797282017300/811610652614852678/foodiez-light.png"
            alt="Logo"
            className="navbar-brand img-responsive"
          />
        </LogoDark>
      ) : (
        <LogoLight to="/">
          <img
            src="https://cdn.discordapp.com/attachments/811518797282017300/811610638517403718/foodiez-dark.png"
            alt="Logo"
            className="navbar-brand img-responsive"
          />
        </LogoLight>
      )}

      <div className="navbar-nav ml-auto">
        <NavProduct
          to="/ingredients"
          className="nav-item"
          style={{ padding: "0.25em 1em",textDecoration: "none",}}
        >
          ingredients
        </NavProduct>
        <NavProduct
          to="/recipes"
          className="nav-item"
          
          style={{ padding: "0.25em 1em",textDecoration: "none" , }}
        >
          recipes
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;