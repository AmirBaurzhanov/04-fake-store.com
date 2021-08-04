import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <NavLink className="navbar-brand" to="/">Fake Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/">All Products</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    {props.category.map(c =>
                                        <li key={c}><NavLink className="dropdown-item" to={`/category/${c}`}>{c}</NavLink></li>
                                    )}
                                </ul>
                            </li>

                        </ul>
                        <NavLink to="/cart">
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi-cart-fill me-1" />
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{props.cart}</span>
                                </button>
                            </form>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
