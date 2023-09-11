import Nav from "../Nav/Nav";
import s from "./style.module.scss";

function Header(props) {
  return (
    <div className={s.container} id="container">
      <a href="/" className={s.logo}>
        <img src="../../img/logo.png" alt="logo" />
        <h1>CD 11 FFSS</h1>
      </a>
      <Nav />
    </div>
  );
}

export default Header;
