import { Link } from "react-router-dom"
import useDatabase from "../hooks/useDatabase";
import getImage from "../utils/getImage";
import { useEffect } from "react";

export default function Header({customRef}) {
    const [dataNavbar,setNavbar] = useDatabase(["navbar"]);
    const navbar = dataNavbar;
    const logo = getImage(navbar?.logoImg)
    
    const getNavbarElements = () =>  navbar?.navbarElements?.map(element=> <Link className="navbar-item has-text-primary-dark" to={element.linkTo} >{element.label}</Link>)

    return(
        <header ref={customRef}>
            <nav className="navbar is-dark is-hoverable font-text-1" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={logo} style={{height: "60px"}} className="py-2 px-2" />
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu has-text-weight-bold">
                    <div className="navbar-start ">
                    {getNavbarElements()}
                    </div>
                </div>
            </nav>
        </header>
    )
}