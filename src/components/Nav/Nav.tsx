import './Nav.css';

function Nav(){
    return (
        <div className="nav">
            <div className="container">
                <div className="logo-text">
                    TPBuilder
                </div>
                <span className="spacer"/>
                <div className="nav-item">
                    Home
                </div>
                <div className="nav-item">
                    Projects
                </div>
                <div className="nav-auth-item">
                    Sign in
                </div>
            </div>
        </div>
    );
}

export default Nav;