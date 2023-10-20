import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src="top.png" style={{maxHeight: "60px"}} className="py-2 px-2" />
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu has-text-weight-bold">
                    <div className="navbar-start ">
                        <Link className="navbar-item has-text-primary-dark" to="/" >Home</Link>
                        <Link className="navbar-item has-text-primary-dark" to="timeline" >Timeline</Link>
                        <Link className="navbar-item has-text-primary-dark" to="characters" >Characters</Link>
                        <Link className="navbar-item has-text-primary-dark" to="contacts" >Contacts</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}