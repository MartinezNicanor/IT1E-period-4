import './Footer.css'
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    const policieList = [
        {title: "Terms of use", src: "*"},
        {title: "Privacy policy", src: "*"},
        {title: "Code of conduct", src: "*"}
    ];

    const helpList = [
        {title: "Ask the forum", src: "/forum"},
        {title: "Something", src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    ];

    const aboutList = [
        {title: "About QUIZZED", src: "*"},
        {title: "Our team", src: "*"},
    ];

    return(
        <footer>
            <div className="lists">
                <ul>
                    <FooterList links = {aboutList} title = "About us" />
                </ul>

                <ul>
                    <FooterList links = {helpList} title = "Get help" />
                </ul>

                <ul>
                    <FooterList links = {policieList} title = "Legal & policies" />
                </ul>
            </div>

            <div className="icons">
                <a href="https://github.com/"><FaGithub size = {40} /></a>
                <a href="https://www.instagram.com/"><FaInstagram size = {40} /></a>
                <a href="https://www.facebook.com/"><FaFacebook size = {40} /></a>
            </div>

            <p>© 2023 Quizzed</p>
        </footer>
    );
}

const FooterList = ({ links, title }) => {
    return (
        <div className="listContainer">
            <h3>{ title }</h3>
            {links.map((link) => (
                <li className = "footerLink"><Link to={link.src}>{ link.title }</Link></li>
            ))}
        </div>
    );
}

export default Footer;
