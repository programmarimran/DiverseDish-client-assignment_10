import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../components/Footer';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;