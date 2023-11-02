import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import { useSelector } from "react-redux";

const NavBar = () => {

  const authMode = useSelector(state => state.auth.authMode)
  return (
    <nav>
      <div>
        <span>
          <Link className={style.removeStyle} to={"/"}>CookBook</Link>
        </span>
      </div>
      <div>
        <ul>
            <li>
                <button>
                    <Link className={style.removeStyle} to={"/auth"}>{authMode}</Link>
                </button>
            </li>
        </ul>
      </div>
    </nav>

  );
};
export default NavBar;
