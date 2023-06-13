import './Header.css';

const Header = ({ title }) => {
    return ( 
        <header>
            <p className="headerTitle">{ title }</p>
        </header>
     );
}

export default Header;
