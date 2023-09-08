import "./Nav.css";
import Logo from "./left/Logo";
import Option from "./right/Option";
const Nav = () => {
  return (
    <header>
      <nav className="nav_bar">
        <div className="row">
          <Logo />
          <Option />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
