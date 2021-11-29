import './Home.css';
import image1 from './../../assets/main.png';
import image3 from './../../assets/jsimg.png';

function Home(){
    return (
        <div className="home">
            <div className="container">
                <div className="text-content">
                    We will improve your skills at times
                </div>
                <div className="media-content">
                    <img className="main-img" src={image1} alt="Welcome"/>
                </div>
            </div>
            <div className="wave-img">

            </div>
            <div className="middle-section">
                <img src={image3} alt=""/>
                <div className="description-text">
                    Add new projects, invite other users and just write code together.
                </div>
            </div>
        </div>
    );
}

export default Home;