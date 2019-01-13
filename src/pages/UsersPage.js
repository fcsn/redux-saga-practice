import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class UsersPage extends React.Component {
    state = {
        user: this.props.user,
        id: this.props.match.params.id,
    }

    componentDidMount () {
        const { params } = this.props.match
        const { Actions } = this.props;
        console.log(`${params.id} in cdm`)
        // Actions.fetchUser(params.id);
    }

    static getDerivedStateFromProps (props, state) {
        console.log(state.id)
        console.log(props.match.params.id)
        if (props.match.params.id !== state.id) {
            console.log('getDerivedStateFromProps')
            // const { params } = props.match
            // const { Actions } = props;
            // Actions.fetchUser(state.id);
            return {
                user: props.user,
            }
        }
    }

    render() {
        const { params } = this.props.match
        const { user } = this.props
        console.log(`${params.id} in render`)
        return (
            <div style={{width: '100vw'}}>
                <span>{JSON.stringify(user)}</span>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user,
    }),
    dispatch => ({
        Actions: bindActionCreators(actions, dispatch)
    })
)(UsersPage);
