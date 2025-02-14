import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="logo.JPG" alt="Logo" className="logo" /> {/* Add logo image */}
            <h1>SINC Stock Manager</h1>
            <div className="nav-buttons">
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Contact</button>
            </div>
        </header>
    );
}

export default Header;