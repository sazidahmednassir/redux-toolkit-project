import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">Home </Link>
            </nav>
            <nav>
                <Link to="/add">Add Book </Link>
            </nav>
            <nav>
                <Link to="/show">Show Book </Link>
            </nav>
            
        </div>
    );
};

export default NavBar;