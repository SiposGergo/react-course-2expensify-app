import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">
            Home page</NavLink>
        <NavLink exact={true} to="/create" activeClassName="is-active">
            Add expense</NavLink>
        <NavLink exact={true} to="/help" activeClassName="is-active">
            Help</NavLink>
    </header>
);

export default Header;