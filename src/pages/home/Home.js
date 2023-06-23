import './Home.css'
import Herobanner from './Herobanner';
import ServicesMenu from './ServicesMenu';
import USP from './USP';

const Home = () => {
    return (
        <div className="home">
            <Herobanner />
            <ServicesMenu />
            <USP/>
        </div>
    );
}

export default Home;
