import { Component } from "react";
import './header.css'
import logo from '../../images/logo.png'


class Header extends Component {
    render() {
        return <header>
            <img src={logo} alt="logo" />
            <div>
                <h1>Titre du site</h1>
                <h2>Notre slogan</h2>
            </div>
        </header>;
    }
}

export default Header;