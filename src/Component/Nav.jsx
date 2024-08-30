import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    // Getting date
    const [date, setDate] = useState(new Date());
    const [theme,setTheme]=useState('lighttheme')
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const getlan=()=>{
        alert('vvbj')
    }
const darktheme=()=>{
if(theme=='darktheme'){
setTheme('lighttheme')
}else{
    setTheme('darktheme')
}
}
useEffect(()=>{
document.body.className=theme;
},[theme])
    return (
        <section>
            {/* Navbar1 */}
            <div className="navbar1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active bg-secondary rounded text-light" href="#">
                                <i className="fa-solid fa-bars pr-2"></i>Sections <span className="sr-only">(current)</span>
                            </a>
                            <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-auto" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-dark">
                            <a className="nav-link active border-right" href="#">English <span className="sr-only">(current)</span></a>
                            <a className="nav-link border-right" href="#">தமிழ்</a>
                            <a className="nav-link border-right" href="#">বাংলা</a>
                            <a className="nav-link border-right" href="#">ગુજરાતી</a>
                            <a className="nav-link border-right" href="#">हिंदी</a>
                            <a className="nav-link border-right" href="#">मराठी</a>
                            <a className="nav-link border-right" onClick={getlan}>France</a>
                            <a className="nav-link border-right" href="#">बिज़नेस</a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#"><button type="button" className="btn btn-primary" onClick={darktheme}>Change Theme<i className="fa-solid fa-calendar-days pl-2"></i></button>
                                <span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a className="nav-link" href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a className="nav-link "><i className="fa-brands fa-youtube"></i></a>
                            <a className="nav-link "><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className='m-0' />
            {/* Navbar2 */}
            <div className="navbar2">
                <nav className="pl-2 navbar-expand-lg navbar-light">
                    <div className="row w-100">
                        <div className="navbar-collapse col-md-4" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex">
                                <a className="nav-link" href="#">Edition</a>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle mr-3" type="button" data-toggle="dropdown" aria-expanded="false">
                                        India
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">International</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dates">
                                {date.toDateString()}
                            </div>
                        </div>
                        <div className="navbar-collapse col-md-8" id="navbarNavAltMarkup">
                            <div className="navbar-nav text-dark">
                                <a className="nav-link active" href="#">
                                    <div className='text-center'>
                                        <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="Indian Express Logo" />
                                        <div className="journalism-sec">Journalism of Courage</div>
                                    </div>
                                    <span className="sr-only">(current)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className='m-0' />
            {/* Navbar3 */}
            <div className="navbar3">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <a className="nav-link text-danger" href="#">Trending</a>
                        <Link to='/home'><button type="button" className="btn btn-danger btn-sm m-1">Home</button></Link>
                        <Link to='/business'><button type="button" className="btn btn-danger btn-sm m-1">Business</button></Link>
                        <Link to='/sports'><button type="button" className="btn btn-danger btn-sm m-1">Sports</button></Link>
                        <Link to='/politics'><button type="button" className="btn btn-danger btn-sm m-1">Politics</button></Link>
                        <Link to='/education'><button type="button" className="btn btn-danger btn-sm m-1">Education</button></Link>
                        <Link to='/entertainment'><button type="button" className="btn btn-danger btn-sm m-1">Entertainment</button></Link>
                    </div>
                    <div className="ml-auto" id="navbarNavAltMarkup">
                        <div className="text-dark mr-auto m-2">
                            <Link to='/signin'><button className="btn btn-warning btn p-2">Sign Up</button></Link>
                            <Link to='/display'><button className="btn btn-warning btn p-2">Display</button></Link>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className='m-0' /><hr className='m-1' />
        </section>
    );
};

export default Nav;
