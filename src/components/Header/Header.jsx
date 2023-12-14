import Nav from "../Nav/Nav";
import s from "./style.module.scss";

function Header(props) {
  return (
    <div className={s.container} id="container">
      <a href="/" className={s.logo}>
        <img src="../../img/logo.png" alt="logo" />
      </a>
      <h1>CD FFSS 11</h1>
      <Nav />
    </div>
  );
}

export default Header;
