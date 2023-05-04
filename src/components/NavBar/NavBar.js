import React from 'react';
import { Nav, Logo, Links, Link } from './NavBar.sc';
import logoImg from "./logoImg.png"

const Navbar = () => {
    return (
        <Nav>
            <Logo href="/"><img src={logoImg} alt="Logo" /></Logo>
            <Links>
                <Link href="/mapView">MapView</Link>
                <Link href="/tableView">TableView</Link>
            </Links>
        </Nav>
    );
};

export default Navbar;
