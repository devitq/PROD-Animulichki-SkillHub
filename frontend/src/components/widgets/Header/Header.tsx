import less from "./Header.module.less"

import { ModeToggle } from "../../mode-toggle";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={less.header}>
            <Link to={"/"}><img className={less.logo} src='/logo.svg'></img></Link>
            <div className={less["line-block"]}>
                <ModeToggle />
            </div>

        </header>
    )
}
export default Header;