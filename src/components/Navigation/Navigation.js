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
                    <NavLink to="/users/BrendanEich" className="user" activeClassName="activeUser">BrendanEich</NavLink>
                </div>
                <div>
                    <NavLink to="/users/getify" className="user" activeClassName="activeUser">getify</NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;
