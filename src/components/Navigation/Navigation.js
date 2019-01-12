import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div className="nav">
                <div>
                    <NavLink exact to="/" className="user" activeClassName="activeUser">main</NavLink>
                </div>
                <div>
                    <NavLink to="/users/1" className="user" activeClassName="activeUser">pain</NavLink>
                </div>
                <div>
                    <NavLink to="/users/2" className="user" activeClassName="activeUser">seek</NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;
