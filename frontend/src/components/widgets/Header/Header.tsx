import less from "./Header.module.less";
import { ModeToggle } from "../../mode-toggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const isRoot = location.pathname !== "/";

    const headerClasses = isRoot ? `${less.header} ${less.header_no_index}` : less.header;

    return (
        <header className={headerClasses}>
            <Link to={"/"}><img className={less.logo} src='/logo.svg' alt="Logo"></img></Link>
            <div className={less["line-block"]}>
                <ModeToggle />
            </div>
        </header>
    );
};

export default Header;
