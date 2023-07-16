import React, { useState } from 'react';

const Menu = ({ SigtPaso }) => {

return(<header id="header" className="fixed-top d-flex align-items-center">
<div className="container d-flex justify-content-between">
    <div className="logo">
        
        <h1><a href="index.html">CAR SHOP</a></h1>
    </div>

    <nav id="navbar" className="navbar">
        <ul>
            <li><a className={`nav-link scrollto ${SigtPaso === 1 ? 'active' : ''}`} href="#">REGISTRAR CLIENTE</a></li>
            <li><a className={`nav-link scrollto ${SigtPaso === 2 ? 'active' : ''}`} href="#">REGISTRAR VEHICULO</a></li>
            <li><a className={`nav-link scrollto ${SigtPaso === 3 ? 'active' : ''}`} href="#">SERVICIOS</a></li>
            <li><a className={`nav-link scrollto ${SigtPaso === 4 ? 'active' : ''}`} href="#">ORDEN</a></li>
        </ul>
    </nav>
</div>
</header>);
}
export default Menu