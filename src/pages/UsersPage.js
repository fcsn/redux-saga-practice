import React from 'react';

const UsersPage = ({ match }) => {
    const { id } = match.params
        return (
            <div>
                users {id}
            </div>
        );
}

export default UsersPage;
