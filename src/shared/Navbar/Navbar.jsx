import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logo.svg";

const Navbar = () => {
    return (
        <header className='bg-[#1C2B35] h-[80px] flex items-center top-0 sticky z-20'>
            <div className="fullNav flex justify-between container mx-auto align-middle">
                <div className="img_container">
                    <img src={logo} alt="" />
                </div>
                <div className="navContainer text-white my-auto">
                    <nav className=''>
                        <ul className='flex gap-5 '>
                            <li><Link to="/">Order</Link></li>
                            <li><Link to="orderReview">Order Review</Link></li>
                            <li><Link to="manageInventory">Manage Inventory</Link></li>
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="signUp">SignUp</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;