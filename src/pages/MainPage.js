import React from 'react';
import * as api from '../services';

class MainPage extends React.Component {

    getUsers = () => {
        api.getUsers().then((response) => {
            console.log(response);
        });
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div>
                main
            </div>
        );
    }
}

export default MainPage;
