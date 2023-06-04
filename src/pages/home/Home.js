import './Home.css'
import Herobanner from './Herobanner';
import ServicesMenu from './ServicesMenu';

const Home = () => {
    return (
        <div className="home">
            <Herobanner />
            <ServicesMenu />
        </div>
    );
}

export default Home;
