import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
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
                    <Link className={style.removeStyle} to={"/auth"}>Auth</Link>
                </button>
            </li>
        </ul>
      </div>
    </nav>

  );
};
export default NavBar;
