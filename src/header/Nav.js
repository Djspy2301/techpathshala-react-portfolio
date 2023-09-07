import "./Nav.css";
import Logo from "./left/Logo";
import Option from "./right/Option";
const Nav = () => {
  return (
    <header>
      <nav class="nav_bar">
        <div class="row">
          <Logo />
          <Option />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
