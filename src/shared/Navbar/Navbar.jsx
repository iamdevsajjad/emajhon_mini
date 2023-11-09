import React from 'react';
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
                            <li><a href="">Order</a></li>
                            <li><a href="">Order Review</a></li>
                            <li><a href="">Order</a>Manage Inventory</li>
                            <li><a href="">Order</a>Login</li>
                            <li><a href="">Order</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;