import './Header.css';

const Header = ({ title }) => {
    return ( 
        <header>
            <p className="Assignments">{ title }</p>
        </header>
     );
}

export default Header;
